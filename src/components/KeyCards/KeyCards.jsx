import React from "react";
import "./KeyCard.css";
const KeyCards = ({ heading, about, number, className }) => {
  return (
    <>
      <div
        className={`relative my-[2rem] bg-[white] flex min-h-[14rem] px-[1rem] max-w-[22rem] border border-[#039443] shadow-lg rounded-[2rem] flex-col items-center justify-center ${className}`}
      >
        <div class="absolute hexagon-wrapper " style={{ top: "-35px" }}>
          <div class="hexagon bg-primary">
            <span class="number text-[white] bg-primary">{number}</span>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem] items-center ">
          <div className="text-[1.4rem] font-[700] text-primary text-center sm:mt-[2rem]">
            {heading}
          </div>
          <div className="text-[14px] text-justify font-[400] text-[#000000]">
            {about}
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyCards;
