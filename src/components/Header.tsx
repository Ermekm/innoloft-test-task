import logoSvg from "../assets/icons/logo.svg";
import messanger from "../assets/icons/messenger.svg";
import arrowDown from "../assets/icons/arrow_down_light.svg";
import notifications from "../assets/icons/notifications.svg";
import profileImg from "../assets/images/profile_1.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

export const Header = (): JSX.Element => {
  const { config } = useAppSelector((state) => state.config);

  return (
    <header className="bg-primary p-[10px]">
      <div className="container flex mx-auto px-[20px] md:px-0 items-center">
        <div className="w-[310px]">
          <div className="w-fit bg-white px-[10px] py-[5px] h-[50px]">
            <Link
              to="/"
              className="w-[100%] h-[100%] flex justify-center items-center"
            >
              <img
                src={config?.logo ?? logoSvg}
                alt="logo"
                className="w-[100%] h-[100%]"
              />
            </Link>
          </div>
        </div>
        <div className="justify-between items-center grow hidden lg:flex">
          <input
            className="w-[500px] my-4 px-[9px] py-[5px] rounded placeholder-secondary-t bg-[url('/assets/search.svg')] bg-no-repeat bg-[center_right_1rem]"
            type="text"
            placeholder="Enter interests, keyword, company name, etc."
          />
          <div className="flex gap-[20px]">
            <div>
              <img src={messanger} alt="" />
            </div>
            <div className="flex">
              <span className="mr-[9px] text-light-t">EN</span>
              <div className="flex">
                <img src={arrowDown} alt="" />
              </div>
            </div>
            <div className="flex">
              <img src={notifications} alt="" />
            </div>
            <div className="flex">
              <div className="w-[25px] h-[25px] rounded-full overflow-hidden mr-[9px]">
                <img src={profileImg} alt="" />
              </div>
              <div className="flex">
                <img src={arrowDown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
