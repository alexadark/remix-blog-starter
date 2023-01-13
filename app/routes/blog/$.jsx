import { json } from "@remix-run/node";
import { useStoryblokData } from "~/hooks";

import { getStoryblokApi } from "@storyblok/react";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  // oauthToken: process.env.AUTH_TOKEN,
  oauthToken: "gsWcuXzHqJsHHeImr7fTcwtt-61919-ZM_c9h5q_gsFLiA_xEiP",
  // https: true,
});

export const action = async ({ request }) => {
  const body = await request.formData();
  const name = body.get("name");
  const mail = body.get("mail");
  const text = body.get("text");
  const postSlug = body.get("post-slug");
  return Storyblok.post("spaces/189880/stories/", {
    story: {
      name,
      slug: name,
      parent_id: 246074567,
      content: {
        name,
        mail,
        text,
      },
    },
    publish: 1,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
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
    posts: blog.stories,
    total,
  });
};

const PostPage = () => useStoryblokData();

export default PostPage;
