import React, { useEffect, useRef, useState } from "react";
import { Fab } from "@mui/material";
import { CiGlobe } from "react-icons/ci";
import usImage from "../../assets/us.png";
import uaeImage from "../../assets/uae.png";
import italyImage from "../../assets/italy.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const languages = [
  {
    name: "English",
    image: usImage,
    code: "en",
  },
  {
    name: "Italian",
    image: italyImage,
    code: "it",
  },
  {
    name: "Arabic",
    image: uaeImage,
    code: "ar",
  },
];

const LanguageSelector = () => {
  const languageObj = localStorage.getItem("i18nextLng");
  const [showMenu, setShowMenu] = useState(false);
  const { i18n } = useTranslation();
  const lang = useSelector((state) => state.language.value);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((language) => language.code === languageObj) || languages[0]
  );
  const profile_ref = useRef();

  const toggleProfileBox = (event) => {
    if (
      showMenu &&
      (profile_ref.current === event.target ||
        profile_ref.current?.contains(event.target))
    ) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", toggleProfileBox);

    return () => {
      document.removeEventListener("click", toggleProfileBox);
    };
  }, [showMenu]);

  return (
    <div className="fixed bottom-[2rem] right-[2rem]  z-[50]">
      <div className="relative">
        {showMenu && (
          <div className="absolute bg-[white] p-2 w-[130px] right-0 top-[-145px] rounded-lg shadow-lg">
            <ul>
              {languages.map((language, index) => (
                <li
                  key={index}
                  onClick={() => {
                    i18n.changeLanguage(language.code);
                    setSelectedLanguage(language);
                  }}
                  className="flex items-center justify-between cursor-pointer hover:bg-[#e5e7eb] rounded py-2 px-3"
                >
                  <img
                    src={language.image}
                    alt={language.name}
                    className="w-[20px] h-[20px] rounded-full"
                  />
                  <span>{language.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div
          className="flex"
          ref={profile_ref}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Fab size="medium" aria-label="add" style={{ background: "#fff" }}>
            <img
              src={selectedLanguage.image}
              alt={selectedLanguage.name}
              className="w-[20px] h-[20px] rounded-full"
            />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
