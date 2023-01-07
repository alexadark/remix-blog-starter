import { useLoaderData, Link } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";

const Category = ({ blok }) => {
  const { postsByCategory } = useLoaderData();
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h1>Posts for: {blok.headline}</h1>
      {blok.description && <p>{blok.description}</p>}
      {postsByCategory.map((p) => {
        return (
          <article key={p._uid}>
            <Link to={`/blog/${p.slug}`}>
              <h2>{p.content.headline}</h2>
            </Link>
            <div>{p.content.teaser}</div>
          </article>
        );
      })}
    </div>
  );
};

export default Category;
