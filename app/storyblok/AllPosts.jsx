import { storyblokEditable } from "@storyblok/react";
import { useLoaderData, Link } from "@remix-run/react";

const AllPosts = ({ blok }) => {
  const { posts, total } = useLoaderData();
  console.log("total", total);

  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h1>{blok.headline}</h1>
      {posts?.map((p) => {
        const post = p.content;
        return (
          <article key={post._uid}>
            <Link to={`/${p.full_slug}`}>
              <h2>{post.headline}</h2>
            </Link>
            <p>{post.teaser}</p>
          </article>
        );
      })}
    </div>
  );
};

export default AllPosts;
