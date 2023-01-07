import { storyblokEditable } from "@storyblok/react";
import { useLoaderData } from "@remix-run/react";

const LastPosts = ({ blok }) => {
  const { _uid, headline } = blok;
  const { lastPosts } = useLoaderData();

  return (
    <div {...storyblokEditable(blok)} key={_uid} className="center-container">
      <h2>{headline}</h2>
      {lastPosts.map((post) => {
        return (
          <div key={post.content._uid}>
            <h3>{post.content.headline}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default LastPosts;
