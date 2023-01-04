import { storyblokEditable } from "@storyblok/react";
import { useLoaderData } from "@remix-run/react";

const LastPosts = ({ blok }) => {
  const { _uid, headline } = blok;
  const { posts, story } = useLoaderData();
  const numberOfPosts = story.content.body?.find(
    (item) => item.component === "last-posts"
  )?.number_of_posts;
  const lastPosts = posts.slice(0, numberOfPosts);

  return (
    <div {...storyblokEditable(blok)} key={_uid}>
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
