import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6]">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-[78px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;