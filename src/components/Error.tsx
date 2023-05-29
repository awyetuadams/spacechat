import React, { useEffect } from "react";

interface PropsTypes {
  error: any;
}

const Error: React.FC<PropsTypes> = ({ error }) => {
  console.log("error message", error);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <div className="absolute inset-0 h-screen flex justify-center items-center overflow-hidden z-[10]">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="bg-red-200 p-[20px] text-[18px] relative z-[10] text-red-600">
        {error.response.data.message}
      </div>
    </div>
  );
};

export default Error;
