import { Breadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { Sidebar } from "../components/Sidebar";

export const Root = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex">
        <div className="hidden xl:block">
          <Sidebar />
        </div>
        <div>
          <Breadcrumbs />
          <div className="pb-[20px] p-[10px] xl:p-[0]">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};
