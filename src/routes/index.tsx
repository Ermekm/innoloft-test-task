import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export const Routes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
