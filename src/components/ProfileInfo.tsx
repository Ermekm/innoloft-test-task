import profileImg from "../assets/images/profile_1.png";

export const ProfileInfo = (): JSX.Element => {
  return (
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
  );
};
