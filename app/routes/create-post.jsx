import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  oauthToken: process.env.AUTH_TOKEN,
  https: true,
});
const createPost = async (postData) => {
  const { headline, teaser } = postData;
  try {
    return await Storyblok.post("spaces/189880/stories/", {
      story: {
        name: headline,
        slug: headline,
        parent_id: 241402052,
        content: {
          headline,
          teaser,
        },
      },
      publish: 1,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await createPost(postData);
  return redirect(`/blog/${postData.headline}`);
};

const CreatePost = () => {
  return (
    <>
      <h1>create post</h1>
      <Form>
        <input type="text" name="headline" />
        <textarea name="teaser" id="" cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default CreatePost;
