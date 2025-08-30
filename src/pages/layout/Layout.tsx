import { Outlet } from "react-router-dom";
import Header from "../../module/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
