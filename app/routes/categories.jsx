import { Outlet } from "@remix-run/react";

const categories = () => {
  return (
    <>
      <h3>Categories pages</h3>
      <Outlet />
    </>
  );
};

export default categories;
