import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Product } from "../pages/Product";
import { EditProduct } from "../pages/EditProduct";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "product/edit/:productId",
        element: <EditProduct />,
      },
    ],
  },
]);

export const Routes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
