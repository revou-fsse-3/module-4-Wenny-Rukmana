import { Navigate, Outlet } from "react-router-dom";

const ProtectLayout = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

  return <Navigate to="/" />;
};

export default ProtectLayout;
