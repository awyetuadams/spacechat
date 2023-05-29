import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="pb-[18px] px-[17px] mt-auto">
      <div>
        <Social />
        <div className="flex justify-center items-center gap-[5px]">
          <p className="text-center text-white text-opacity-50">
            © 2023 Space Inc. Copyright. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
