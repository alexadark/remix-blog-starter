import { json, redirect } from "@remix-run/node";
import { useStoryblokData } from "~/hooks";

import { getStoryblokApi } from "@storyblok/react";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  oauthToken: process.env.AUTH_TOKEN,
  https: true,
});

//Create a new comment with the MAPI
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

//Get the uuid of the newly created comment to add it to the post from which it was created
const getCreatedCommentUuid = async (name) => {
  const sbApi = getStoryblokApi();
  const { data } = await sbApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "comments/",
    is_startpage: false,
    filter_query: {
      name: {
        like: name, // We want the comment which has the same name as the one we just created
      },
    },
  });
  return data.stories[0].uuid; //we get the uuid of the comment
};

const updatePostWithComment = async (formData, uuid) => {
  const { postName, id, postSlug } = formData;
  const postData = JSON.parse(formData.blok); //We get the all the existing data from the post from the form data
  try {
    return await Storyblok.put(`spaces/189880/stories/${id}`, {
      story: {
        name: postName,
        slug: postSlug,
        id,
        content: {
          component: "post",
          ...postData, //We add the existing data to the new data
          categories: postData.categories.map((cat) => cat.uuid),
          tags: postData.tags.map((tag) => tag.uuid),
          author: postData.author.uuid,
          comments: [...postData.comments.map((comment) => comment.uuid), uuid], //we had the new comment with the uuid we got from the getCreatedCommentUuid function
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
  let formData = await request.formData();
  formData = Object.fromEntries(formData);
  await addComment(formData); //We create the comment
  const uuid = await getCreatedCommentUuid(formData.name); //we get the uuid of the newly created comment
  await updatePostWithComment(formData, uuid); //we update the post with the new comment

  return redirect(`/blog/${formData.postSlug}`);
};

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();
  const resolveRelations = [
    "post.categories",
    "post.tags",
    "post.author",
    "post.comments",
  ];

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
