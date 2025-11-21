import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import LoadingFallback from "./LoadingFallback";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
