import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getStoryblokApi } from "@storyblok/react";

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
      content: {
        like: `*${query}*`,
      },
    },
  });

  return json({ stories: data.stories });
};

const SearchPage = () => {
  const { stories } = useLoaderData();
  console.log("stories", stories);
  return <div></div>;
};

export default SearchPage;
