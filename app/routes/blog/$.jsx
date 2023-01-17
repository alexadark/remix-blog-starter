import { json, redirect } from "@remix-run/node";
import { useStoryblokData } from "~/hooks";

import { getStoryblokApi } from "@storyblok/react";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  oauthToken: process.env.AUTH_TOKEN,
  https: true,
});

const addComment = async (commentData) => {
  const { name, mail, text } = commentData;
  try {
    return await Storyblok.post("spaces/189880/stories/", {
      story: {
        name,
        slug: name,
        parent_id: 246074567,
        content: {
          component: "comment",
          name,
          mail,
          text,
        },
      },
      publish: 1,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCreatedCommentUuid = async (name) => {
  const sbApi = getStoryblokApi();
  const { data } = await sbApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "comments/",
    is_startpage: false,
    filter_query: {
      name: {
        like: name,
      },
    },
  });
  console.log("data", data);
  return data.stories[0].uuid;
};

const updatePostWithComment = async (commentData, uuid, postData) => {
  const { name, id, postSlug } = commentData;
  try {
    return await Storyblok.put(`spaces/189880/stories/${id}`, {
      story: {
        name,
        slug: postSlug,
        id,
        content: {
          component: "post",
          ...postData,
          comments: [...postData.comments, uuid],
        },
      },
      publish: 1,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const commentData = Object.fromEntries(formData);
  const postData = JSON.parse(commentData.blok);
  console.log("commentData", postData);

  await addComment(commentData);
  const uuid = await getCreatedCommentUuid(commentData.name);
  await updatePostWithComment(commentData, uuid, postData);

  return redirect(`/blog/${commentData.postSlug}`);
};

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();
  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await sbApi.get(`cdn/stories/blog/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations,
  });

  const { data: blog } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: false,
  });

  let response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?token=${process.env.STORYBLOK_PREVIEW_TOKEN}&starts_with=blog/&version=draft/&per_page=20&is_startpage=false`
  );
  const total = await response?.headers.get("total");

  console.log("response", await response?.headers.get("total"));

  return json({
    story: data?.story,
    publishDate: data?.story?.published_at,
    id: data?.story?.id,
    name: data?.story?.name,
    posts: blog.stories,
    total,
  });
};

const PostPage = () => useStoryblokData();

export default PostPage;
