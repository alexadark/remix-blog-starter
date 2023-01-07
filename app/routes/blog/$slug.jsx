import { json } from "@remix-run/node";
import { useStoryblokContent } from "~/hooks/useStoryblokContent";

import { getStoryblokApi } from "@storyblok/react";

export const loader = async ({ params }) => {
  const { slug } = params;
  const sbApi = getStoryblokApi();

  const { data } = await sbApi.get(`cdn/stories/blog/${slug}`, {
    version: "draft",
    resolve_relations: ["post.categories", "post.tags", "post.author"],
  });

  return json({
    story: data?.story,
    publishDate: data?.story?.published_at,
  });
};

const PostPage = () => useStoryblokContent();

export default PostPage;
