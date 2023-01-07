import { json } from "@remix-run/node";

import { useStoryblokContent } from "~/hooks/useStoryblokContent";

import { getStoryblokApi } from "@storyblok/react";

export const loader = async ({ params }) => {
  const { slug } = params;
  const sbApi = getStoryblokApi();

  let { data } = await sbApi.get(`cdn/stories/categories/${slug}`, {
    version: "draft",
    resolve_relations: ["post.categories", "post.tags", "post.author"],
  });

  return json({
    story: data?.story,
  });
};

const CategoryPage = () => useStoryblokContent();

export default CategoryPage;
