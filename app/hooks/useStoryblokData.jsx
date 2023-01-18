import { useLoaderData } from "@remix-run/react";

import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

export const useStoryblokData = () => {
  const data = useLoaderData();
  const story = useStoryblokState(data.story, {
    resolveRelations: [
      "post.categories",
      "post.tags",
      "post.author",
      "post.comments",
    ],
  });
  return <StoryblokComponent blok={story.content} />;
};
