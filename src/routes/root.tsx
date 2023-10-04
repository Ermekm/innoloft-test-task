import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const Root = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex">
        <div className="hidden xl:block">
          <Sidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
