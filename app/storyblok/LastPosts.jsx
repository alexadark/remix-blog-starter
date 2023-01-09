import { storyblokEditable } from "@storyblok/react";
import { useLoaderData, Link } from "@remix-run/react";

const LastPosts = ({ blok }) => {
  const { _uid, headline } = blok;
  const { lastPosts } = useLoaderData();

  return (
    <div {...storyblokEditable(blok)} key={_uid} className="center-container">
      <h2>{headline}</h2>
      {lastPosts.map((post) => {
        return (
          <Link to={`/${post.full_slug}`} key={post.content._uid}>
            <h3>{post.content.headline}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default LastPosts;
