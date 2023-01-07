import { json } from "@remix-run/node";
import { useStoryblokContent } from "~/hooks/useStoryblokContent";

import { getStoryblokApi } from "@storyblok/react";

export const loader = async () => {
  const sbApi = getStoryblokApi();
  const { data } = await sbApi.get(`cdn/stories/blog`, {
    version: "draft",
  });
  const { data: blog } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: false,
  });
  return json({
    story: data?.story,
    posts: blog.stories,
  });
};

const BlogPage = () => useStoryblokContent();

export default BlogPage;
