import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { useLoaderData } from "@remix-run/react";

const Post = () => {
  const { story } = useLoaderData();
  const blok = story.content;
  const { _uid, headline, content, categories, image, tags, author } = blok;
  return (
    <article {...storyblokEditable(blok)} key={blok._uid}>
      <img
        src={`${image.filename}/m/1200x400/smart/filters:grayscale():quality(60)/`}
        alt=""
      />
      <h1>{headline}</h1>
      {render(content)}
      <div>
        <h3>Categories</h3>
        {categories.map((c) => (
          <span key={c._uid}>{c.name}</span>
        ))}
        <h3>Tags</h3>
        {tags.map((t) => (
          <span key={t._uid}>{t.name}</span>
        ))}
      </div>
      <h3>Author</h3>
      <div>{author.name}</div>
    </article>
  );
};

export default Post;
