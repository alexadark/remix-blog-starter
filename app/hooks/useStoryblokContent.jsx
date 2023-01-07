import { useLoaderData } from "@remix-run/react";

import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

export const useStoryblokContent = () => {
  const data = useLoaderData();
  const story = useStoryblokState(data.story);
  return <StoryblokComponent blok={story.content} />;
};
