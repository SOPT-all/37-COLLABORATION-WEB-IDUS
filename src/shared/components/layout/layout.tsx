import { Outlet } from "react-router";

import { Header } from "../header/header";
import Footer from "../footer/footer";
import FloatingButton from "../floating-button/floating-button";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Layout;
