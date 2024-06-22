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
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { NavLink, useNavigate } from "react-router-dom";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [navigationBar, setNavigationBar] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const images = [fieldPhoto, fieldPhoto, fieldPhoto, fieldPhoto, fieldPhoto];
  const handleNavigationBar = () => {
    setNavigationBar(!navigationBar);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  const navigate = useNavigate("");
  useEffect(() => {
    gsap.from('.paras', {
      opacity: 0,
      stagger: 0.1,
      onComplete: () => {
        gsap.to('.paras', { opacity: 1, duration: 1 });
      },


      scrollTrigger: {
        trigger: '.paras',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',

      },
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  return (
    <>
      <div className="overflow-hidden bg-gradient-to-r  from-[white] to-[#d7ebd1] flex flex-col justify-center items-center">
        <div className="relative w-full items-center flex justify-between py-[3rem] px-[6rem] md:px-[2rem] md:py-8 ">
          <img src={headerLogo} className="w-[150px] md:w-[115px]" alt="" />
          <div className="md:hidden flex gap-[2rem] text-[#434343] mt-[1rem] mb-[1rem] font-[600]">
            <NavLink className="text-primary" to={"/"}>
              Home
            </NavLink>
            <NavLink href="" to={"/metaverse"} className="hover:text-primary">
              Metaverse
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
                  Home
                </NavLink>
                <NavLink className="hover:text-primary" to={"/metaverse"}>
                  Metaverse
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[full] mt-[1.5rem] mb-[2rem] px-8  md:text-center  flex gap-[1.1rem] flex-col justify-center items-center">
          <div className="font-[700] text-[1.4rem]  text-[#434343] ">
            {t('Welcome to Whiz')}
          </div>
          <div className="font-[700] text-[2.5rem] text-[#434343] ">
            Transforming the <span className="text-[#039443]">Agri-Food</span>{" "}
            Sector
          </div>
          {/* <div><img src={curveLine} className="absolute top-0 w-[12rem]  mt-[16rem] ml-[22rem] left-0 " alt="" /></div> */}
          <div className="paras font-[400] w-[80%] md:w-[100%] sm:text-[0.9rem] text-[#434343] text-[0.9rem] text-center">
            AgerLink is an innovative, all encompassing platform designed to
            revolutionize the agri-food sector. By integratin advanced
            technologies, including blockchain, we aim to ensure the complete
            transparency, security, and efficiency throughout the entire supply
            chain--from land preparation to the final sale of products
          </div>
        </div>
        <div>
          <button onClick={() => changeLanguage('en')}>Language change</button>
        </div>
        <div className="w-full mt-[1rem] overflow-hidden flex items-center justify-center mb-[2rem]">
          {/* <ImageSlider images={images} /> */}
          {images.map((item) => {
            return <img src={item} className="w-[80%]" />;
          })}
        </div>
        <div className="flex mb-[2rem] mt-[2.5rem]  items-center justify-center ">
          <div className="w-[80%] flex md:flex-wrap md:flex-col-reverse gap-[2rem]">
            <div className="w-[50%] md:w-full">
              <div className="border-[#d7ebd1] bg-[black]    border-[1rem]  rounded-[1rem]">
                <img src={leafPhoto} className="rounded-none" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center md:items-center  md:text-center  w-[50%] md:w-full">
              <div className=" font-[700]  text-[1.4rem] md:mb-[1rem]  text-[#434343]">
                Access Limited During Development
              </div>
              <div className="paras font-[400]   text-[0.9rem] sm:text-[0.7rem] text-[#434343] ">
                AgerLink is an innovative, all encompassing platform designed to
                revolutionize the agri-food sector. Our platform is currently is
                in development phase, and access is limited . We are working
                delegently to bring you a robust and fully functional system
                that meets the highest standards of quality and performance.
                Your understanding and patience are greatly appreciated as we
                work towards launching AgerLink.
              </div>
              <Button className="mt-[1.5rem] sm:max-w-[8rem] max-w-[10rem]">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[2rem] items-center justify-center">
          <div className="font-[700] mt-[3rem] mb-[3rem] text-[1.8rem] ">
            Key Features
          </div>
          <div className="flex mt-[2rem] mb-[2rem] justify-center items-center">
            <div className="w-[90%] md:w-[98%] justify-center flex lg:flex-wrap gap-[2rem] items-center">
              <KeyCards
                className="word md:w-[100%]  lg:w-[50%] min"
                heading={"BlockChain Technology"}
                about={
                  "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                }
                number={"01"}
              />
              {/* //////asdasdsdaasdasa */}
              <KeyCards
                className="md:w-[100%] lg:w-[50%]"
                heading={"BlockChain Technology"}
                about={
                  "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                }
                number={"02"}
              />
              <KeyCards
                className="md:w-[100%] lg:w-[50%]"
                heading={"BlockChain Technology"}
                about={
                  "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                }
                number={"03"}
              />
              <KeyCards
                className="md:w-[100%] lg:w-[50%]"
                heading={"BlockChain Technology"}
                about={
                  "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                }
                number={"04"}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex mt-[2rem] mb-[2rem] justify-center items-center">
              <div className="w-[90%] md:w-[98%] justify-center flex lg:flex-wrap gap-[2rem] items-center">
                <KeyCards
                  className="md:w-[100%] lg:w-[50%] min"
                  heading={"BlockChain Technology"}
                  about={
                    "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                  }
                  number={"05"}
                />
                <KeyCards
                  className="md:w-[100%] lg:w-[50%]"
                  heading={"BlockChain Technology"}
                  about={
                    "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                  }
                  number={"06"}
                />
                <KeyCards
                  className="md:w-[100%] lg:w-[50%]"
                  heading={"BlockChain Technology"}
                  about={
                    "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                  }
                  number={"07"}
                />
                <KeyCards
                  className="md:w-[100%] lg:w-[50%]"
                  heading={"BlockChain Technology"}
                  about={
                    "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                  }
                  number={"08"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full mt-[2rem]">
            <div className="py-[2rem] md:h-[50vh] w-full bg-[#039443] flex items-center justify-center flex-col">
              <div className="font-[700] relative  text-center text-[2rem] text-[#FFFFFF]">
                Why Choose AgerLink?
              </div>
              <img src={swingPathImage} className="w-full" alt="" />
            </div>
            <div className="relative w-full flex items-center justify-center bg-[#fff]">
              <div className="w-[90%] md:w-[100%] lg:relative gap-[2rem] sm:gap-[0.5rem] flex lg:flex-wrap justify-center items-center -mt-[10rem]">
                <SimpleCard
                  className="md:w-[100%] lg:w-[48%] mb-[2rem]"
                  heading={"Enhanced Food Safet"}
                  about={
                    "By providing detailed product histories, AgerLink improves food safety and allows consumers to trace the origins of their food. This transparency builds consumer trust and ensures the integrity of the food supply chain."
                  }
                />
                <SimpleCard
                  className="md:w-[100%] lg:w-[48%] mb-[2rem]"
                  heading={"Enhanced Food Safet"}
                  about={
                    "By providing detailed product histories, AgerLink improves food safety and allows consumers to trace the origins of their food. This transparency builds consumer trust and ensures the integrity of the food supply chain."
                  }
                />
                <SimpleCard
                  className="md:w-[100%] lg:w-[48%] mb-[2rem]"
                  heading={"BlockChain Technology"}
                  about={
                    "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                  }
                />
                <SimpleCard
                  className="md:w-[100%] lg:w-[48%] mb-[2rem]"
                  heading={"BlockChain Technology"}
                  about={
                    "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                  }
                />
                <SimpleCard
                  className="md:w-[100%] lg:w-[48%] mb-[2rem]"
                  heading={"BlockChain Technology"}
                  about={
                    "Our platform is currently is in development phase, and access is limited. We are working delegently to bring you a robust and fully functional system that meets the highest standards of quality and performance."
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full   bg-[#fff] flex items-center justify-center ">
          <div className="w-[60%]  md:w-[90%] flex items-center gap-[1.2rem] justify-center text-center flex-col">
            <div className="font-[700] mt-[4rem]   text-[2rem] text-[#000000]">
              Stay Tuned
            </div>
            <div className="font-[400] text-[1rem] text-[#4E4E4E]">
              We appreciate your patience as we develop AgerLink into
              state-of-the-art platform.
            </div>
            <div className="font-[600] text-[1rem]">
              Stay tuned for updates and be among the first to experience the
              future of the agri-food sector. Our development team is working
              tirelessly to ensure that AgerLink meets your needs and exceed
              your expectations.
            </div>
            <div className="font-[600] text-[1rem]">
              Stay tuned for updates and be among the first to experience the
              future of the agri-food sector. Our development team is working
              tirelessly to ensure that AgerLink meets your needs and exceed
              your expectations.
            </div>
            <Button className="sm:max-w-[8rem] w-[10rem] mb-[5rem] md:mb-[3rem] ">
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-full bg-[#039443] flex items-center justify-center ">
          <div className="w-[90%] flex items-center justify-center flex-col text-center gap-[2rem]">
            <div className="font-[700] mt-[2rem] text-[#fff]   text-[1.8rem] text-[#434343]">
              Join US
            </div>
            <div className="paras text-[#fff] font-[300] text-[16px]">
              To access and benefit from the innovative technologies of AgerLink
              and AgerLin k DAO, it is essential to be a member of OP Ager
              Campanus. Our platform is designed to strengthen and enhance the
              companies that are part of this cooperative, offering advanced
              tools and resources for the agricultural sector.
            </div>
            <div className="paras text-[#fff] font-[400] text-[1.4rem]">
              By participating in OP Ager Campanus, you will have the
              opportunity to integrate your company with AgerLink solutions,
              leveraging the power of the DAO for collective decisions,
              efficient resource management, and collaboration within the
              industry. Join us to drive innovation and sustainable development
              in the agricultural sector.
            </div>

            <div className="md:hidden flex mb-[3rem] justify-center items-center justify-between pl-[1rem] bg-[#fff] p-[0.3rem] gap-[1rem] h-[2.5rem] rounded-[0.5rem]">
              <input
                type="text"
                className="text-[0.8rem] w-full bg-[transparent] outline-none"
                placeholder="Enter Email Address"
              />{" "}
              <button className="p-[0.5rem] flex items-center justify-center  w-[12rem] text-[0.8em] text-[#fff]  h-[2rem] bg-primary rounded-[0.5rem]">
                Subscribe Now
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
