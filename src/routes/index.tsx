import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Product } from "../pages/Product";
import { EditProduct } from "../pages/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
