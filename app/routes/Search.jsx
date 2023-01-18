import { useLoaderData, useActionData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getStoryblokApi } from "@storyblok/react";
import ls from "local-storage";

export const loader = async ({ request, params }) => {
  const sbApi = getStoryblokApi();
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const query = search.get("query");
  const { data } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
    filter_query: {
      __or: [
        {
          content: {
            like: `*${query}*`,
          },
        },
        {
          headline: {
            like: `*${query}*`,
          },
        },
      ],
    },
  });

  return json({ stories: data.stories });
};

const SearchPage = () => {
  const data = useActionData();
  console.log("data", data);
  const { stories } = useLoaderData();
  console.log("stories", stories);
  return <div></div>;
};

export default SearchPage;
