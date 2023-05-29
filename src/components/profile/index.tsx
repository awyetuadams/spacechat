import { Images } from "@/assets";
import React from "react";
import ProfileItem from "./ProfileItem";

const index = () => {
  const profiles = [
    {
      name: "Cole Black",
      userName: "@ColeBlack",
      img: Images.Cole,
    },
    {
      name: "Amanda Fox",
      userName: "@AmandaFox",
      img: Images.Amanda,
    },
    {
      name: "Adekunle Moh",
      userName: "@AdekunleM",
      img: Images.Adekunle,
    },
  ];
  return (
    <div className="mb-[40px] flex justify-center items-start gap-[30px] lg:gap-[60px] flex-wrap">
      {profiles.map((item, index) => {
        const { name, userName, img } = item;
        return (
          <ProfileItem key={index} name={name} userName={userName} img={img} />
        );
      })}
    </div>
  );
};

export default index;
