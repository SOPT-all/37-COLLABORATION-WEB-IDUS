import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";
import LoadingFallback from "./loading-fallback";

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
