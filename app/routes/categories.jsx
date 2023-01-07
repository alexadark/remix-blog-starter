import { Outlet } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getStoryblokApi } from "@storyblok/react";
export const loader = async () => {
  const sbApi = getStoryblokApi();
  const { data } = await sbApi.get(`cdn/stories/categories`, {
    version: "draft",
  });
  return json({
    catStory: data?.story,
  });
};

const Categories = () => {
  return (
    <>
      <h1>Categories pages</h1>
      <Outlet />
    </>
  );
};

export default Categories;
