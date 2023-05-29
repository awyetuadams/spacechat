import { Images } from "@/assets";
import React, { useEffect, useState } from "react";
import { Profile } from ".";
import Image from "next/image";
import Nav from "./Nav";
import axios from "axios";
// import ProtoTypeVideo from "@/assets/video/prototype.mp4";
interface PropsTypes {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setSubmittedEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Landing: React.FC<PropsTypes> = ({
  setSubmit,
  email,
  setEmail,
  setError,
  setSubmittedEmail,
}) => {
  const [emailValid, setEmailValid] = useState(false);
  const [isLoading, setIsLoadig] = useState(false);
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  }, [email]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoadig(true);
    try {
      const response = await axios.post("/api/waitlist/add", { email });
      if (response.status !== 200) {
        throw new Error("Failed to add to waitlist");
      }
      setSubmittedEmail(email);
      setEmail("");
      setError("");
      setSubmit(true);
      setIsLoadig(false);
    } catch (error: any) {
      setError(error);
      setIsLoadig(false);
    }
  };
  return (
    <>
      <Nav />
      {/* Main page container */}
      <div className="flex flex-1 justify-center items-center pt-[115px] px-[17px]">
        {/* Main page Wrapper */}
        <div className="max-w-[1300px] w-full flex justify-center lg:justify-between items-center gap-[20px]">
          {/* left page container */}
          <div className="md:w-2/3 w-full">
            {/* Intro text */}
            <div className="text-center mb-[24px]">
              <h1 className="mb-[12px] lg:mb-[25px] text-[30px] lg:text-[64px] font-[800] lg:leading-[60px] leading-[38px] text-white">
                <span className="text-[#2D8CD2]">New</span> Social Connection
              </h1>
              <p className="text-white text-opacity-80 text-[14px] lg:text-[32px] font-[400] leading-[17px] lg:leading-[40px]">
                {" "}
                We’re building a micro-blogging & instant messaging platform to
                post, like & share to your friends & community.
              </p>
            </div>
            {/* Watchlist Input */}
            <div className="w-full flex justify-center items-center">
              <div className=" border-opacity-20 border border-white rounded-[100px] h-[53px] lg:h-[75px] max-w-[400px] lg:max-w-[750px] w-full flex justify-between gap-[10px] items-center p-[4px] lg:p-[6px] mb-[26px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ml-[19px] w-full max-w-[200px] lg:max-w-[500px] bg-transparent h-full outline-none text-white text-[18px] lg:text-[32px] lg:leading-[38px] font-[500] leading-[21px]"
                  placeholder="Email Address"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!emailValid}
                  className="flex justify-center items-center active:bg-opacity-90 bg-[#2D8CD2] disabled:bg-opacity-50 hover:bg-opacity-80 rounded-[100px] px-[14px] py-[12px] h-full min-w-[120px] lg:max-w-[220px] lg:w-full ">
                  {isLoading && (
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
                  )}
                  <span className="text-[16px] lg:text-[28px] lg:leading-[30px] text-white leading-[20px]">
                    Join waitlist
                  </span>
                </button>
              </div>
            </div>
            {/* Mobile Prototype */}
            <div className="mb-[40px] flex justify-center items-center md:hidden">
              {/* <Image src={Images.Prototype} alt="Space messaging" loading="lazy" /> */}
              <Image
                src={Images.ProtoTypeVideo}
                alt="Prototype video"
                loading="lazy"
                className="max-w-[360px] w-full"
              />
            </div>
            {/* Demo Profiles */}
            <div>
              <Profile />
            </div>
          </div>
          {/* Right page container */}
          <div className="w-1/3 hidden md:block">
            {/* Desktop Prototype */}
            <div className="mb-[40px] md:flex justify-center items-center ">
              {/* <Image src={Images.Prototype} alt="Space messaging" loading="lazy" /> */}
              <Image
                src={Images.ProtoTypeVideo}
                alt="Prototype video"
                loading="lazy"
                className="max-w-[360px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
