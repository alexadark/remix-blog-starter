import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const FooterColumn = ({ blok }) => {
  const { headline, footer_menu } = blok;
  return (
    <div {...storyblokEditable(blok)}>
      <h3>{headline}</h3>
      <div className="">
        {footer_menu?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
