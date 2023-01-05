import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <pre>{JSON.stringify(blok, null, 2)}</pre>
    </main>
  );
};

export default Page;
