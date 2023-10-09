import home from "../assets/icons/home.svg";
import chevronRight from "../assets/icons/chevron_right.svg";
import { Link } from "react-router-dom";

export const Breadcrumbs = (): JSX.Element => {
  return (
    <ul className="flex gap-[10px] w-[100%] items-center">
      <li className="flex">
        <Link to="/" className="">
          <div className="w-[16px] h-[16px]">
            <img src={home} alt="" />
          </div>
        </Link>
      </li>
      <li className="flex">
        <div className="mr-[5px] w-[20px] h-[20px]">
          <img src={chevronRight} alt="" />
        </div>
        <a href="#" className="truncate">
          Offers
        </a>
      </li>
      <li className="flex overflow-hidden">
        <div className="mr-[5px] w-[20px] h-[20px]">
          <img src={chevronRight} alt="" />
        </div>
        <a href="#" className="truncate">
          Intelligent Finite Elements in Structural mechanics
        </a>
      </li>
    </ul>
  );
};
