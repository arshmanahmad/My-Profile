import React, { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const SimpleCard = ({ heading, about, className }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.paragraph', {
      opacity: 0,
      duration: 0.1,
      stagger: 0.1,
      onComplete: () => {
        gsap.to('.paragraph', { opacity: 1, duration: 1 });
      },
      scrollTrigger: {
        trigger: '.paragraph',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <>
      <div
        className={` my-[2rem] bg-[white] flex min-h-[10rem] py-[1.3rem] px-[1.8rem] max-w-[22rem] border border-[#039443] shadow-lg rounded-[1.1rem] flex-col items-center justify-center ${className}`}
      >
        <div className="flex flex-col gap-[1rem] items-center">
          <div className="text-[1rem] font-[700] text-primary text-center">
            {heading}
          </div>
          <div className="paragraph text-[14px] font-[400] text-[#434343]">{about}</div>
        </div>
      </div>
    </>
  );
};

export default SimpleCard;
