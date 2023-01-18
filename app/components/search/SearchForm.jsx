import { useEffect, useRef } from "react";
import { Form, useSearchParams, useTransition } from "@remix-run/react";
import clsx from "clsx";

const SearchForm = () => {
  const [params] = useSearchParams();
  const query = params.get("query");
  let transition = useTransition();
  let isSearching =
    transition.state === "submitting" &&
    transition.submission.formData.get("_action") === "search";

  let formRef = useRef();
  useEffect(() => {
    isSearching && formRef.current.reset();
  }, [isSearching]);

  return (
    <Form
      method="post"
      ref={formRef}
      className="flex justify-between md:w-[90%]"
    >
      <input type="hidden" value={isSearching} name="isSearching" />
      <input
        type="text"
        name="query"
        placeholder="Search..."
        defaultValue={query}
        className={clsx(
          "w-full h-12",
          "bg-black",
          "border-0 border-l-8 border-white focus:border-pink-500",
          "text-white",
          "text-xl font-bold tracking-wide uppercase",
          "focus:outline-none focus:ring-transparent focus:placeholder-transparent  text-white"
        )}
      />
      <button type="submit" name="_action" value="search">
        {isSearching ? "searching" : "Search"}
      </button>
    </Form>
  );
};

export default SearchForm;
