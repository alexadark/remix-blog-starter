import { Form } from "@remix-run/react";

const SubmitComment = ({ slug, id, name, blok }) => {
  return (
    <div>
      <h3>Submit Comment</h3>
      <Form method="post" className="block space-y-4">
        <input type="hidden" name="postSlug" value={slug} />
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="postName" value={name} />
        <input type="hidden" name="blok" value={JSON.stringify(blok)} />
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="mail" id="" placeholder="mail" />
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="your comment"
        ></textarea>
        <input type="submit" />
      </Form>
    </div>
  );
};

export default SubmitComment;
