import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { Sidebar } from "../shared/Sidebar/Sidebar";
// import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 h-[calc(100vh-40px)] bg-white overflow-y-auto">
          <Outlet />
        </div>
        <div className=" hidden lg:flex bg-white shadow-md">
          Similar Posts... ijeifjijeif fkjeijf
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
