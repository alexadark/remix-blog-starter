import { json } from "@remix-run/node";
import { useStoryblokContent } from "~/hooks/useStoryblokContent";
import { getStoryblokApi } from "@storyblok/react";

export const loader = async () => {
  const sbApi = getStoryblokApi();

  const { data } = await sbApi.get(`cdn/stories/categories`, {
    version: "draft",
  });
  const { data: categories } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "categories/",
    is_startpage: false,
  });

  return json({
    story: data?.story,
    categories: categories?.stories,
  });
};
const CategoryArchive = () => useStoryblokContent();

export default CategoryArchive;
