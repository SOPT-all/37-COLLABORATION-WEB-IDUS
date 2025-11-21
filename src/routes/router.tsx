import { createBrowserRouter, Navigate } from "react-router";
import Layout from "@/shared/components/layout/layout";
import ProductPage from "@/pages/product/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/product/1" replace />,
      },
      {
        path: "product/1",
        element: <ProductPage />,
      },
    ],
  },
]);
