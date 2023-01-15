import { useEffect, useRef } from "react";
import { Form, useSearchParams } from "@remix-run/react";
import clsx from "clsx";

const SearchForm = () => {
  const [params] = useSearchParams();
  const query = params.get("query");
  let formRef = useRef();
  useEffect(() => {
    formRef.current.reset();
  }, []);

  return (
    <Form
      method="post"
      ref={formRef}
      className="flex justify-between md:w-[90%]"
    >
      <input
        type="text"
        name="query"
        placeholder="Search..."
        defaultValue={query}
        // value={value}
        // onSubmit={() => setValue("")}
        className={clsx(
          "w-full h-12",
          "bg-black",
          "border-0 border-l-8 border-white focus:border-pink-500",
          "text-white",
          "text-xl font-bold tracking-wide uppercase",
          "focus:outline-none focus:ring-transparent focus:placeholder-transparent  text-white"
        )}
      />
    </Form>
  );
};

export default SearchForm;
