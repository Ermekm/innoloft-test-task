import profileImg from "../assets/images/profile_1.png";
import home from "../assets/icons/home.svg";
import members from "../assets/icons/group.svg";
import organizations from "../assets/icons/organizations.svg";
import arrowDown from "../assets/icons/arrow_down_dark.svg";

export const Sidebar = (): JSX.Element => {
  return (
    <nav className="w-[280px] flex-none mr-[30px]">
      <div className="flex items-center ">
        <div className="w-[70px] h-[70px] rounded-full overflow-hidden mr-[15px]">
          <img src={profileImg} alt="profile_img" />
        </div>
        <div>
          <div className="text-accent-t font-semibold text-[18px]">
            Sven Pietsch
          </div>
          <div className="text-accent-t">Innoloft GmbH</div>
        </div>
      </div>
      <ul>
        <li>
          <a href="" className="flex h-[40px] items-center px-[9px]">
            <div className="mr-[12px]">
              <img src={home} alt="" />
            </div>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="" className="flex h-[40px] items-center px-[9px]">
            <div className="mr-[12px]">
              <img src={members} alt="" />
            </div>
            <span>Members</span>
          </a>
        </li>
        <li>
          <div className="flex justify-between">
            <div className="flex h-[40px] items-center px-[9px]">
              <div className="mr-[12px]">
                {" "}
                <img src={organizations} alt="" />
              </div>

              <span>Organizations</span>
            </div>
            <div>
              <img src={arrowDown} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
