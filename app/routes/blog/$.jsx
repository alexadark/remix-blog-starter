import { json } from "@remix-run/node";
import { useStoryblokData } from "~/hooks";

import { getStoryblokApi } from "@storyblok/react";

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
