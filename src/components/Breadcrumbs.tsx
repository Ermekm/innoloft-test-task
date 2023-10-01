import home from "../assets/icons/home.svg";
import chevronRight from "../assets/icons/chevron_right.svg";

export const Breadcrumbs = (): JSX.Element => {
  return (
    <ul className="flex gap-[10px] my-[20px]">
      <li className="flex">
        <a href="#">
          <div>
            <img src={home} alt="" />
          </div>
        </a>
      </li>
      <li className="flex">
        <div className="mr-[5px]">
          <img src={chevronRight} alt="" />
        </div>
        <a href="#">Offers</a>
      </li>
      <li className="flex">
        <div className="mr-[5px]">
          <img src={chevronRight} alt="" />
        </div>
        <a href="#">Intelligent Finite Elements in Structural mechanics</a>
      </li>
    </ul>
  );
};
