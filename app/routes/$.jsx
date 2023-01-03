import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page() {
  let { story } = useLoaderData();
  story = useStoryblokState(story);

  return <StoryblokComponent blok={story.content} />;
}

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();

  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  // const numberOfPosts = data.story.content.body?.find(
  //   (item) => item.component === "last-posts"
  // )?.number_of_posts;

  let { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations,
  });
  let { data: blog } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
  });

  return json({
    story: data?.story,
    lastPosts: blog?.stories.slice(0, 3),
  });
};
