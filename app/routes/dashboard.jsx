import { Outlet } from "@remix-run/react";

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
