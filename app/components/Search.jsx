import { Form, useSearchParams } from "@remix-run/react";

const Search = () => {
  const [params] = useSearchParams();

  return (
    <Form method="post">
      <input
        type="text"
        name="query"
        placeholder="Search..."
        defaultValue={params.get("query")}
        className="w-full px-4 text-black"
      />
    </Form>
  );
};

export default Search;
