import React from "react";

const SimpleCard = ({ heading, about, className }) => {
  return (
    <>
      <div
        className={` my-[2rem] bg-[white] flex min-h-[10rem] py-[1.3rem] px-[1.8rem] max-w-[22rem] border border-[#039443] shadow-lg rounded-[1.1rem] flex-col items-center justify-center ${className}`}
      >
        <div className="flex flex-col gap-[1rem] items-center">
          <div className="text-[1rem] font-[700] text-primary text-center">
            {heading}
          </div>
          <div className="text-[14px] text-justify font-[400] text-[#434343]">
            {about}
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleCard;
