import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
