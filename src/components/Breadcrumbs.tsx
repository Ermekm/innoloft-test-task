import home from "../assets/icons/home.svg";
import chevronRight from "../assets/icons/chevron_right.svg";

export const Breadcrumbs = (): JSX.Element => {
  return (
    <ul className="flex gap-[10px] my-[20px] p-[10px] w-[100vw] md:w-[100%] ">
      <li className="flex">
        <a href="#" className="flex items-center">
          <div className="w-[16px] h-[16px]">
            <img src={home} alt="" />
          </div>
        </a>
      </li>
      <li className="flex">
        <div className="mr-[5px] w-[20px] h-[20px]">
          <img src={chevronRight} alt="" />
        </div>
        <a href="#" className="truncate">
          Offers
        </a>
      </li>
      <li className="flex truncate">
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
