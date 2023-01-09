import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";
import { useStoryblokData } from "~/hooks";

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";

  const sbApi = getStoryblokApi();

  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations,
  });
  const { data: blog } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: false,
    resolve_relations: resolveRelations,
  });

  return json({
    story: data?.story,
    publishDate: data?.story?.published_at,
    posts: blog?.stories,
  });
};

const RootPage = () => useStoryblokData();

export default RootPage;
