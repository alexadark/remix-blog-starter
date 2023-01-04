import { storyblokEditable } from "@storyblok/react";
import { useLoaderData, Link } from "@remix-run/react";

const AllPosts = ({ blok }) => {
  const { posts } = useLoaderData();
  return (
    <main {...storyblokEditable(blok)} key={blok._uid}>
      <h1>{blok.headline}</h1>
      {posts?.map((p) => {
        const post = p.content;
        return (
          <article key={post._uid}>
            <Link to={`/blog/${p.slug}`}>
              <h2>{post.headline}</h2>
            </Link>
            <p>{post.teaser}</p>
          </article>
        );
      })}
    </main>
  );
};

export default AllPosts;
