import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

import Header from "~/components/Header";

export default function Page() {
  let { story } = useLoaderData();
  story = useStoryblokState(story);

  return (
    <main>
      <Header />
      <StoryblokComponent blok={story.content} />
    </main>
  );
}

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
    is_startpage: false,
    resolve_relations: resolveRelations,
  });

  const { data: category } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "categories/",
    is_startpage: false,
  });

  const { data: config } = await sbApi.get(`cdn/stories/config`, {
    version: "draft",
    resolve_links: "url",
  });

  return json({
    story: data?.story,
    posts: blog?.stories,
    config: config?.story,
    categories: category?.stories,
  });
};
