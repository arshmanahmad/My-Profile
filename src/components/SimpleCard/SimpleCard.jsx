import React from "react";

const SimpleCard = ({ projectName, projectDescription, imageUrl, className, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div
        className={`bg-[rgba(0, 0, 0, 0.6)] flex min-h-[16rem] py-[2rem] px-[2rem] max-w-[28rem] border border-[#039443] shadow-2xl rounded-[1.5rem] flex-col items-center justify-center ${className}`}
      >
        {imageUrl && (
          <div className="w-full h-[12rem] mb-[1.5rem] flex items-center justify-center">
            <img
              src={imageUrl}
              alt={projectName}
              className="w-full h-full object-cover rounded-[1rem]"
            />
          </div>
        )}
        <div className="flex flex-col gap-[1.5rem] items-center">
          <h2 className="text-[1.75rem] font-[700] text-[white] text-center">
            {projectName}
          </h2>
          <p className="text-[16px] text-justify font-[400] text-[#e0e0e0]">
            {projectDescription}
          </p>
        </div>
      </div>
    </a>
  );
};

export default SimpleCard;
