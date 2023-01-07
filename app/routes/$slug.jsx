import { json } from "@remix-run/node";
import { useStoryblokContent } from "~/hooks/useStoryblokContent";
import { getStoryblokApi } from "@storyblok/react";

export const loader = async ({ params }) => {
  const slug = params.slug ?? "home";
  const sbApi = getStoryblokApi();
  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await sbApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });

  const { data: allPosts } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: false,
    resolve_relations: resolveRelations,
  });

  const numberOfPosts = data.story.content.body?.find(
    (item) => item.component === "last-posts"
  )?.number_of_posts;

  return json({
    story: data?.story,
    posts: allPosts?.stories,
    lastPosts: allPosts.stories.slice(0, numberOfPosts),
  });
};

const RootPage = () => useStoryblokContent();

export default RootPage;
