import { Outlet } from "@remix-run/react";

const Categories = () => {
  return (
    <>
      <h1>Categories pages</h1>
      <Outlet />
    </>
  );
};

export default Categories;
