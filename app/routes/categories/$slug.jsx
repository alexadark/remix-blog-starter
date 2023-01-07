import { json } from "@remix-run/node";

import { useStoryblokContent } from "~/hooks/useStoryblokContent";

import { getStoryblokApi } from "@storyblok/react";

export const loader = async ({ params }) => {
  const { slug } = params;
  const sbApi = getStoryblokApi();

  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await sbApi.get(`cdn/stories/categories/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations,
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
  });
};

const CategoryPage = () => {
  return useStoryblokContent();
};

export default CategoryPage;
