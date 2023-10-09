import { Map } from "./Map";
import { useAppSelector } from "../hooks/redux";
import { type FC } from "react";
import { type IUser } from "../types/User";
import { type ICompany } from "../types/Company";
import location from "../assets/icons/location.svg";

interface CompanyDescriptionProps {
  user: IUser;
  company: ICompany;
  hideMap?: boolean;
}

export const CompanyDescription: FC<CompanyDescriptionProps> = ({
  user,
  company,
  hideMap = false,
}) => {
  const address = `${company.address.street}, ${company.address.zipCode}
    ${company.address.city.name}, ${company.address.country.name}`;

  const { config } = useAppSelector((state) => state.config);

  return (
    <div className="flex gap-[10px] flex-col px-[10px] py-[20px] md:px-[20px]">
      <div className="w-[100%] md:w-[200px] pt-[10px]">
        <img src={company.logo} alt="" />
      </div>
      {config?.hasUserSection && (
        <UserInfo user={user} companyName={company.name} />
      )}
      <div className="flex gap-[5px]">
        <div>
          <img src={location} alt="" />
        </div>
        <div className="w-[160px]">{address}</div>
      </div>
      {!hideMap && (
        <Map
          latitude={company.address.latitude}
          longitude={company.address.longitude}
        />
      )}
    </div>
  );
};

interface IUserInfoProps {
  user: IUser;
  companyName: string;
}

const UserInfo: FC<IUserInfoProps> = ({ user, companyName }) => {
  return (
    <div className="flex items-center mb-[10px]">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
        <img src={user.profilePicture} alt="profile_img" />
      </div>
      <div>
        <div className="font-semibold text-[18px]">
          {user.firstName} {user.lastName}
        </div>
        <div>{companyName}</div>
      </div>
    </div>
  );
};
