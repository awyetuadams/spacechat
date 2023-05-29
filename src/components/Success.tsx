import { Images } from "@/assets";
import Image from "next/image";
import React from "react";

interface PropsTypes {
  email: string;
  count: number;
}

const Success: React.FC<PropsTypes> = ({ email, count }) => {
  return (
    <div className="pb-[50px] px-[17px] pt-[80px] flex flex-1 justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-[1300px] w-full">
        <div className="max-w-[650px] w-full text-center text-[20px] lg:text-[32px] mb-[37px]">
          <h4 className="font-[500] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[43px] text-white text-opacity-90">
            Thanks for signing up on the waitlist you will get an invite code
            soon.
          </h4>
        </div>
        <div className="max-w-[750px] w-full p-[20px] border border-[#30BAF5] border-opacity-50 rounded-[20px] mb-[60px] flex justify-center items-center">
          <div className="flex justify-center items-center flex-col mb-[15px]">
            <div className="w-[60px] lg:w-[120px] h-[60px] mb-[10px] lg:mb-[30px] p-[2px]">
              <Image
                src={Images.SpaceLight}
                alt="Space light logo"
                className=""
                loading="lazy"
              />
            </div>
            <p className="mb-[15px] font-[700] text-[18px] lg:text-[24px] lg:leading-[40px] leading-[21px] text-white">
              {!count ? (
                <svg
                  aria-hidden="true"
                  className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-white fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                count
              )}{" "}
              people already ahead of you.
            </p>
            <p className="text-[12px] text-center w-full md:text-[14px] text-white text-opacity-50 lg:text-[16px] lg:leading-[20px] font-[700]">
              This reservation is held for{" "}
              <span className="text-[#30BAF5]">{email}</span>{" "}
            </p>
          </div>
        </div>
        <div className="text-center max-w-[460px] w-full">
          <h4 className="text-[22px] font-[700] lg:text-[32px] lg:leading-[40px] leading-[27px] text-white mb-[25px]">
            Interested in priority access?
          </h4>
          <h5 className="text-[14px] lg:text-[20px] font-[600] leading-[17px] lg:leading-[24px] text-white text-opacity-50 mb-[55px] text-center">
            Get early access by referring your friends. The more friends that
            join. the sooner you’ll get access.{" "}
          </h5>
          <button className="border-white border-opacity-50 border w-[115px] h-[50px] rounded-[10px] text-white text-[22px] leading-[27px] font-[700] hover:bg-white hover:border-white hover:text-black duration-300">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
