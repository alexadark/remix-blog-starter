import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { useLoaderData, Link } from "@remix-run/react";
// import Date from "~/components/Date";
import { format } from "date-fns";
//TODO fix date component
const Post = ({ blok }) => {
  const { publishDate } = useLoaderData();
  const { headline, content, categories, image, tags, author } = blok;
  return (
    <article {...storyblokEditable(blok)} key={blok._uid}>
      <div>
        {/* <Date date={publishDate} /> */}
        {format(new Date(publishDate), "MMMM dd, yyyy")}
      </div>
      <img
        src={`${image.filename}/m/1200x400/smart/filters:grayscale():quality(60)/`}
        alt=""
      />
      <h1>{headline}</h1>
      {render(content)}
      <div>
        <h3>Categories</h3>
        {categories.map((c) => (
          <Link to={`/${c.full_slug}`} key={c._uid}>
            <span>{c.name}</span>
          </Link>
        ))}
        <h3>Tags</h3>
        {tags.map((t) => (
          <Link to={`/${t.full_slug}`} key={t._uid}>
            <span>{t.name}</span>
          </Link>
        ))}
      </div>
      <h3>Author</h3>
      <div>{author.name}</div>
    </article>
  );
};

export default Post;
