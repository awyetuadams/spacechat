import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Images } from "@/assets";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center px-[17px] py-[10px]  fixed left-0 right-0 top-0 duration-300 bg-black shadow-sm">
      <div className="flex items-center justify-start max-w-[1300px] w-full">
        <div className="h-[40px] w-[120px] lg:w-[250px] lg:h-[80px] overflow-hidden flex justify-center items-center">
          <Image
            className="h-full object-contain"
            src={Images.SpaceLogo}
            loading="lazy"
            alt="space logo"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
