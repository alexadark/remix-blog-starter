import { json } from "@remix-run/node";
import { useStoryblokContent } from "~/hooks/useStoryblokContent";

import { getStoryblokApi } from "@storyblok/react";

export const loader = async ({ params }) => {
  const { slug, uuid } = params;
  const sbApi = getStoryblokApi();

  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await sbApi.get(`cdn/stories/tags/${slug}`, {
    version: "draft",
  });

  const { data: postsByTag } = await sbApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
    resolve_relations: resolveRelations,
    filter_query: {
      tags: {
        in_array: uuid,
      },
    },
  });

  return json({
    story: data?.story,
    postsByTag: postsByTag?.stories,
    params,
  });
};

const TagPage = () => useStoryblokContent();

export default TagPage;
