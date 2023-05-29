import Image from "next/image";
import React from "react";
import { Images } from "@/assets";

interface PropsTypes {
  name: string;
  userName: string;
  img: string;
}

const ProfileItem: React.FC<PropsTypes> = ({ name, userName, img }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-[7px] h-[80px] w-[80px] lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden">
          <Image src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="mb-[4px] flex justify-start items-center gap-[2px]">
          <h4 className="capitalize text-white font-[800] leading-[16px] lg:leading-[35px] text-[14px] lg:text-[30px]">
            {name}
          </h4>
          <Image
            src={Images.Verified}
            alt="verified icon"
            className="w-[13px] h-[13px] lg:w-[28px] lg:h-[28px]"
            loading="lazy"
          />
        </div>
        <h5 className="text-white w-full text-left text-opacity-50 text-[12px] lg:text-[26px] font-[400] leading-[14px] lg:leading-[30px]">
          {userName}
        </h5>
      </div>
    </div>
  );
};

export default ProfileItem;
