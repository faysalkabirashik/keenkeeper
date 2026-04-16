import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar here later */}
      <Outlet />
      {/* Footer here later */}
    </div>
  );
};

export default MainLayout;