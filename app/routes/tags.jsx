import { Outlet } from "@remix-run/react";

const TagsPage = () => {
  return (
    <div>
      <h3>Tags Pages</h3>
      <Outlet />
    </div>
  );
};

export default TagsPage;
