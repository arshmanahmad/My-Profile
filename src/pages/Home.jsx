import React, { useEffect, useRef, useState } from "react";
import headerLogo from "../assets/LogoGreen1.png";
import fieldPhoto from "../assets/fieldphoto.png";
import leafPhoto from "../assets/leaf.png";
import menuBar from "../assets/menu.svg";
import Button from "../components/Button/Button";
import KeyCards from "../components/KeyCards/KeyCards";
import curveLine from "../assets/roundLine.png";
import swingPathImage from "../assets/swingPath.png";
import SimpleCard from "../components/SimpleCard/SimpleCard";
import { NavLink, useNavigate } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import arrowC1 from "../assets/arrow-c1.svg";
import arrowC2 from "../assets/arrow-c2.svg";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import dummyVideo from "../assets/dummy.mp4";

const Home = () => {
  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.value);
  const [navigationBar, setNavigationBar] = useState(false);

  const handleNavigationBar = () => {
    setNavigationBar(!navigationBar);
  };

  return (
    <>
      <div
        className="overflow-hidden bg-gradient-to-r  from-[black] to-[#000529] flex flex-col justify-center items-center"
      >
        <div className="relative w-full items-center flex justify-between py-[3rem] px-[6rem] md:px-[2rem] md:py-8 ">
          <h1 className="text-[white] text-[2rem] font-bold">ArshWhiz</h1>
          <div className="md:hidden flex gap-[2rem] text-[#434343] mt-[1rem] mb-[1rem] font-[600]">
            <NavLink className="text-primary" to={"/"}>
              {t("Header.Links.Home")}
            </NavLink>
            <NavLink href="" to={"/metaverse"} className="hover:text-primary">
              {t("Header.Links.Metaverse")}
            </NavLink>
          </div>
          <div className="relative flex hidden md:flex  mt-4 mb-4">
            <img
              src={menuBar}
              className="pointer"
              style={{ cursor: "pointer" }}
              onClick={handleNavigationBar}
              alt=""
            />
            <div
              id="navigationBar"
              className={`p-[1rem] z-50 transform transition-transform duration-300 ease-in-out fixed top-0 right-0 bg-[white] w-[13rem] h-full shadow-lg flex flex-col ${navigationBar ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div
                className="w-full font-[600] text-primary flex justify-end"
                style={{ cursor: "pointer" }}
                onClick={handleNavigationBar}
              >
                ✖
              </div>
              <div className="w-full mt-[2rem] h-[3rem] flex items-center justify-center">
                <img src={headerLogo} alt="" />
              </div>
              <div className=" flex w-full p-[2rem]  gap-[2rem] flex-col text-[#434343] mt-[1rem] mb-[1rem] font-[600]">
                <NavLink className="text-primary" to={"/"}>
                  {t("Header.Links.Home")}
                </NavLink>
                <NavLink className="hover:text-primary" to={"/metaverse"}>
                  {t("Header.Links.Metaverse")}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[1.5rem] mb-[2rem] px-8 md:text-center flex gap-[1.1rem] flex-col justify-center items-center bg-black py-10">
          <div className="font-[700] text-[1.4rem] text-white">
            Welcome to My Profile
          </div>
          <div className="font-[700] text-[2.5rem] text-white relative mb-5">
            Showcasing My Work and Projects{" "}
            <span className="text-[#039443]"></span>{" "}
            in the Digital World
          </div>
          <div className="font-[400] w-[80%] md:w-[100%] sm:text-[0.9rem] text-white text-[0.9rem] text-center">
            Explore my social media profiles and projects that I have worked on. Connect with me to know more about my work and collaborations.
          </div>
        </div>


        <div className="w-full flex items-center justify-center md:mb-[3rem]">
          <ReactOwlCarousel
            className="banner owl-theme"
            nav={true}
            navText={[`<img  src='${arrowC1}'>`, `<img  src='${arrowC2}'>`]}
            dots={false}
            // autoplay={1}
            items={1}
            start={1}
            // autoplayHoverPause={true}
            autoplayTimeout={4000}
            smartSpeed={1500}
            loop
          >
            <div className="item mx-[20%] md:mx-[10%] ">
              <video controls className="w-full h-full" autoPlay loop>
                <source src={dummyVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="item mx-[20%] md:mx-[10%]">
              <img className="w-full" src={fieldPhoto} alt="" />
            </div>
            <div className="item mx-[20%] md:mx-[10%]">
              <img className="w-full" src={fieldPhoto} alt="" />
            </div>
          </ReactOwlCarousel>
        </div>
        {/* <div className="w-full mt-[1rem] overflow-hidden flex items-center justify-center mb-[2rem]"></div> */}
        <div className="flex mb-[2rem] mt-[2.5rem]  items-center justify-center ">
          <div className="w-[80%] flex md:flex-wrap md:flex-col-reverse gap-[2rem]">
            <div className="w-[50%] md:w-full">
              <div className="border-[#d7ebd1] bg-[black]    border-[1rem]  rounded-[1rem]">
                <img src={leafPhoto} className="rounded-none" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center md:items-center  md:text-center  w-[50%] md:w-full">
              <div className=" font-[700]  text-[1.4rem] md:mb-[1rem]  text-[#434343]">
                {t("Development.Heading")}
              </div>
              <div className="font-[400]   text-[0.9rem] sm:text-[0.7rem] text-[#434343] ">
                {t("Development.Description")}
              </div>
              <Button className="mt-[1.5rem] sm:max-w-[8rem] max-w-[10rem]">
                {t("Development.LearnMore")}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[2rem] items-center justify-center">
          <div className="font-[700] mt-[3rem] mb-[3rem] text-[1.8rem] ">
            {t("KeyFeatures.Heading")}
          </div>
          <div className="flex mt-[2rem] mb-[2rem] justify-center items-center">
            <div className="w-[90%] grid grid-cols-12 md:w-[90%] justify-center flex gap-x-[2rem] gap-y-[4rem] items-center">
              {t("KeyFeatures.Features", { returnObjects: true }).map(
                (feature, index) => {
                  return (
                    <KeyCards
                      className="col-span-3 w-full  h-full md:col-span-6 sm:col-span-12"
                      heading={feature.Title}
                      about={feature.Description}
                      number={"0" + (index + 1)}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full mt-[2rem]">
            <div className="py-[2rem] md:h-[50vh] w-full bg-[#039443] flex items-center justify-center flex-col">
              <div className="font-[700] relative  text-center text-[2rem] text-[#FFFFFF]">
                {t("Choose.Heading")}
              </div>
              <img src={swingPathImage} className="w-full" alt="" />
            </div>
            <div className="relative w-full flex items-center justify-center bg-[#fff]">
              <div className="w-[90%] place-items-center  md:w-[100%] grid grid-cols-12 lg:relative gap-[2rem] sm:gap-[0.5rem] flex justify-center items-center -mt-[10rem]">
                {t("Choose.Reasons", { returnObjects: true }).map(
                  (option, index) => {
                    return (
                      <SimpleCard
                        className="col-span-3 w-full  h-full md:col-span-6 sm:col-span-12"
                        heading={option.Title}
                        about={option.Description}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full   bg-[#fff] flex items-center justify-center ">
          <div className="w-[60%]  md:w-[90%] flex items-center gap-[1.2rem] justify-center text-center flex-col">
            <div className="font-[700] mt-[4rem]   text-[2rem] text-[#000000]">
              {t("Tuned.Heading")}
            </div>
            <div className="font-[400] text-[1rem] text-[#4E4E4E]">
              {t("Tuned.Description1")}
            </div>
            <div className="font-[600] text-[1rem]">
              {t("Tuned.Description1")}
            </div>
            <Button className="sm:max-w-[8rem] w-[10rem] mb-[5rem] md:mb-[3rem] ">
              {t("Development.LearnMore")}
            </Button>
          </div>
        </div>
        <div className="w-full bg-[#039443] flex items-center justify-center ">
          <div className="w-[90%] flex items-center justify-center flex-col text-center gap-[2rem]">
            <div className="font-[700] mt-[2rem] text-[#fff]   text-[1.8rem] text-[#434343]">
              {t("JoinUs.Heading")}
            </div>
            <div className="text-[#fff] font-[300] text-[16px]">
              {t("JoinUs.Description1")}
            </div>
            <div className="text-[#fff] font-[400] text-[1.4rem]">
              {t("JoinUs.Description2")}
            </div>

            <div className="md:hidden flex mb-[3rem] justify-center items-center justify-between pl-[1rem] bg-[#fff] p-[0.3rem] gap-[1rem] h-[2.5rem] rounded-[0.5rem]">
              <input
                type="text"
                className="text-[0.8rem] w-full bg-[transparent] outline-none"
                placeholder={t("JoinUs.EnterEmail")}
              />{" "}
              <button className="p-[0.5rem] flex items-center justify-center  w-[12rem] text-[0.8em] text-[#fff]  h-[2rem] bg-primary rounded-[0.5rem]">
                {t("JoinUs.Subscribe")}
              </button>
            </div>
            <div className="  flex flex-col w-[100%] items-center justify-center hidden md:flex  ">
              <input
                type="text"
                className=" text-[0.7rem]  text-center w-full font-[500] bg-[#fff] text-[1rem]  p-[0.8rem] rounded-[0.5rem] outline-none"
                placeholder="Enter Email Address"
              />
              <button className="p-[0.5rem] mt-[1rem]   mb-[1.5rem] font-[500] text-[1rem]  flex items-center justify-center  w-full text-[0.7rem] text-primary bg-[#fff] rounded-[0.5rem]">
                Subscribe Now
              </button>
            </div>
            {/* <LanguageSelector /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
