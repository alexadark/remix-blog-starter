import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";

  const resolveRelations = ["post.categories", "post.tags", "post.author"];
  const sbApi = getStoryblokApi();

  const { data } = await getStoryblokApi().get(`cdn/stories/tags/${slug}`, {
    version: "draft",
  });

  const { data: postsByTag } = await sbApi.get(`cdn/stories/`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
    resolve_relations: resolveRelations,
    filter_query: {
      tags: {
        in_array: data.story.uuid,
      },
    },
  });

  return json({
    story: data?.story,
    postsByTag: postsByTag?.stories,
  });
};

const TagPage = () => {
  let { story } = useLoaderData();
  story = useStoryblokState(story);

  return (
    <div>
      <h1>Test</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
};

export default TagPage;
