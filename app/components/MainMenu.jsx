import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useLoaderData } from "@remix-run/react";

const MainMenu = () => {
  let { config } = useLoaderData();
  const {
    content: { header_nav: nav },
  } = config;
  return (
    <div className="flex" {...storyblokEditable(nav)}>
      {nav.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default MainMenu;
