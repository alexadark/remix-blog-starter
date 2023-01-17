import { json } from "@remix-run/node";

import { useStoryblokData } from "~/hooks";

import { getStoryblokApi } from "@storyblok/react";

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();
  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await sbApi.get(`cdn/stories/categories/${slug}`, {
    version: "draft",
  });

  const { data: categories } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "categories/",
    is_startpage: false,
  });

  const { data: postsByCategory } = await sbApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
    resolve_relations: resolveRelations,
    filter_query: {
      categories: {
        in_array: data.story.uuid,
      },
    },
  });

  return json({
    story: data?.story,
    postsByCategory: postsByCategory?.stories,
    categories: categories?.stories,
  });
};

const CategoryPage = () => useStoryblokData();

export default CategoryPage;
