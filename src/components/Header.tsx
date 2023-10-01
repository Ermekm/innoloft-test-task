import logo from "../assets/icons/logo.svg";
import messanger from "../assets/icons/messenger.svg";
import arrowDown from "../assets/icons/arrow_down_light.svg";
import notifications from "../assets/icons/notifications.svg";
import profileImg from "../assets/images/profile_1.png";

export const Header = (): JSX.Element => {
  return (
    <header className="bg-primary p-[10px]">
      <div className="container flex mx-auto px-[20px] md:px-0">
        <div className="w-[140px] my-4 mr-[155px]">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
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
