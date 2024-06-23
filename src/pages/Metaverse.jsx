import React, { useState } from "react";
import metaVerseImg from "../assets/metaVerseImage.png";
import { NavLink, useNavigate } from "react-router-dom";
import headerLogo from "../assets/LogoGreen1.png";
import menuBar from "../assets/menu.svg";
import Button from "../components/Button/Button";
import playButton from "../assets/playButtonIcon.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";

const Metaverse = () => {
  const { t } = useTranslation();

  const [navigationBar, setNavigationBar] = useState(false);
  const handleNavigationBar = () => {
    setNavigationBar(!navigationBar);
  };
  const navigate = useNavigate("");
  return (
    <>
      <div
        className="w-full min-h-[100vh] flex flex-col bg-cover bg-top"
        style={{ backgroundImage: `url(${metaVerseImg})` }}
      >
        <div className="relative w-full items-center flex justify-between py-[3rem] px-[6rem] md:px-[2rem] md:py-8 ">
          <img src={headerLogo} className="w-[150px] md:w-[115px]" alt="" />
          <div className="md:hidden flex gap-[2rem] text-[#434343] mt-[1rem] mb-[1rem] font-[600]">
            <NavLink className="hover:text-primary" to={"/"}>
              {t("Header.Links.Home")}
            </NavLink>
            <NavLink href="" to={"/metaverse"} className="text-primary">
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
              className={`p-[1rem] z-50 transform transition-transform duration-300 ease-in-out fixed top-0 right-0 bg-[white] w-[13rem] h-full shadow-lg flex flex-col ${
                navigationBar ? "translate-x-0" : "translate-x-full"
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
                <NavLink className="hover:text-primary" to="/">
                  {t("Header.Links.Home")}
                </NavLink>
                <NavLink className="text-primary" to={"/metaverse"}>
                  {t("Header.Links.Metaverse")}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <LanguageSelector />
        <div className="flex w-full h-[75vh] justify-center items-center">
          <Button icon={playButton} type="iconButton">
            {t("Metaverse.Play")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Metaverse;
