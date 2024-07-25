import React, { useEffect, useRef, useState } from "react";
import headerLogo from "../assets/LogoGreen1.png";
import leafPhoto from "../assets/leaf.png";
import menuBar from "../assets/menu.svg";
import Button from "../components/Button/Button";
import swingPathImage from "../assets/swingPath.png";
import SimpleCard from "../components/SimpleCard/SimpleCard";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import arrowC1 from "../assets/arrow-c1.svg";
import arrowC2 from "../assets/arrow-c2.svg";
import githubImage from '../assets/github.png'
import HrProjectImage from '../assets/projectsImages/hr7.png'
import AgerLink from '../assets/agrilanding.png'
import Trippn from '../assets/trippn.png'
import eternal from '../assets/eternal.png'
import feedy from '../assets/as.png'
import weatherApp from '../assets/weather app.png'
import GoroaSkinCare from '../assets/goroa1.png'



const Home = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.id = 'fiverr-seller-widget-script-ce2857b8-a12b-4bbf-869f-647b369e6410';
    script.src = 'https://widgets.fiverr.com/api/v1/seller/arsh153?widget_id=ce2857b8-a12b-4bbf-869f-647b369e6410';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-config', '{"category_name":"Programming \u0026 Tech"}');

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [navigationBar, setNavigationBar] = useState(false);

  const handleNavigationBar = () => {
    setNavigationBar(!navigationBar);
  };
  const navigate = useNavigate()
  const project = [
    {
      projectName: "HR Portal",
      description: "HR Management made in React | Vite | TypeScript   Web Application with full fledge functionalities",
      url: "https://hr-portal-nu.vercel.app/",
      image: HrProjectImage,
    },
    {
      projectName: "Agerlink Landing Page",
      description: "The Landing page which is made in React | Vite | JavaScript of Agerlink, which describes it as an intro for the whole web app",
      url: "https://agri-landing.vercel.app/",
      image: AgerLink,
    },
    {
      projectName: "Trippn",
      description: "Trippn Web App made in React js",
      url: "https://trippn.vercel.app/",
      image: Trippn,
    },
    {
      projectName: "Feedy",
      description: "Feedy Web App made in React js",
      url: "https://feedy-eta.vercel.app/",
      image: feedy,
    },
    {
      projectName: "Weather App",
      description: "This the Weather App with integration to check the weather in realtime sense in React js",
      url: "https://weather-new-app.vercel.app/",
      image: weatherApp,
    },
    {
      projectName: "Eternal",
      description: "Eternal Landing page made in React js",
      url: "https://eternel-website.vercel.app/",
      image: eternal,
    },
    {
      projectName: "Goroa Skincare",
      description: "This the Web App for skincare made in React js",
      url: "https://garoa-skincare.vercel.app/",
      image: GoroaSkinCare,
    },
  ]
  return (
    <>
      <div
        className="overflow-hidden bg-gradient-to-r  from-[black] to-[#000529] flex flex-col justify-center items-center"
      >
        <div className="relative w-full items-center flex justify-between py-[3rem] px-[6rem] md:px-[2rem] md:py-8 ">
          <h1 className="text-[white] text-[2rem] font-bold">ArshWhiz</h1>
          <div className="md:hidden flex gap-[2rem] text-[white] mt-[1rem] mb-[1rem] font-[600]">
            <Link to={"/"} className="hover:text-[#434343]">
              Home
            </Link>
            <a href={"https://github.com/arshmanahmad"} className="hover:text-[#434343]">
              Github
            </a>
            <a className="hover:text-[#434343]" href={"https://www.linkedin.com/in/arshman-ahmad-334829298/"}>
              LinkedIn
            </a>
            <a className="hover:text-[#434343]" >
              Facebook
            </a>
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
        <div className="w-full mt-[1.5rem] mb-[2rem] px-8 md:text-center flex gap-[0.5rem] flex-col justify-center items-center bg-black py-10">
          <div className="font-bold text-xl text-[white]">
            Welcome to My Profile
          </div>
          <div className="font-bold text-3xl md:text-2xl text-[white] relative ">
            Showcasing My Work and Projects{" "}
            <span className="text-green-600"> {/* Placeholder for any additional styling */}
            </span>{" "}
            in the Digital World
          </div>
          <div className="font-normal  md:w-full text-sm text-[white] text-center">
            Explore my social media profiles and projects that I have worked on. Connect with me to know more about my work and collaborations.
          </div>
        </div>


        <div className="w-full mb-[2rem] flex items-center justify-center md:mb-[3rem]">
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

            <div className="item border mx-[20%] md:mx-[10%] bg-[#1a365d] bg-black bg-opacity-50 p-8 flex flex-col justify-center items-center text-center gap-4 text-white rounded-lg shadow-lg">
              <a href="https://github.com/arshmanahmad">
                <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="white">
                  <path fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.262.82-.58 0-.287-.013-1.04-.013-1.905-3.01.655-3.905-.732-4.155-1.405-.14-.358-.747-1.405-1.28-1.685-.437-.23-1.06-.795-.013-.808.985-.013 1.68.905 1.92 1.28 1.12 1.896 2.92 1.37 3.628 1.042.11-.808.437-1.37.795-1.685-2.785-.313-5.72-1.395-5.72-6.202 0-1.37.49-2.495 1.28-3.37-.135-.313-.585-1.595.135-3.32 0 0 1.05-.337 3.44 1.28 1-.287 2.075-.426 3.135-.426 1.06 0 2.125.14 3.135.426 2.385-1.617 3.435-1.28 3.435-1.28.72 1.725.27 3.007.135 3.32.795.875 1.28 2 1.28 3.37 0 4.82-2.94 5.885-5.735 6.185.45.387.855 1.15.855 2.32 0 1.675-.015 3.025-.015 3.44 0 .32.21.7.825.58C20.565 21.793 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <div className="w-full flex items-center">
                <a href="" to={"https://github.com/arshmanahmad"} className="hover:text-primary w-full">
                  <img style={{ cursor: "pointer" }} src={githubImage} />
                </a>
              </div>
            </div>

            <div className="item border mx-[20%] md:mx-[10%] bg-[#1a365d] p-8 flex flex-col justify-center items-center text-center gap-4 text-white rounded-lg shadow-lg">
              <a href={"https://www.linkedin.com/in/arshman-ahmad-334829298/"}>
                <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="100" height="100">
                  <rect width="100%" height="100%" fill="#0077B5" rx="4.5" ry="4.5"></rect>
                  <path d="M12.225 12.297h-3.9V23.9h3.9zM10.275 6.839c-1.253 0-2.018.841-2.018 1.93 0 1.067.746 1.93 1.972 1.93h.022c1.254 0 2.019-.864 2.019-1.93-.023-1.089-.767-1.93-1.995-1.93zm14.514 5.458h-3.891v1.579h.028c.512-.864 1.4-1.64 2.882-1.64 3.094 0 3.66 2.034 3.66 4.681v5.978h-3.9v-5.558c0-1.398-.026-3.197-2.023-3.197-2.024 0-2.335 1.517-2.335 3.092v5.664h-3.9V12.297h3.747v1.589h.054c.523-.99 1.799-1.999 3.702-1.999 3.946 0 4.678 2.593 4.678 5.963V23.9h-3.9V17.61c0-1.528-.026-3.502-2.011-3.502-2.013 0-2.343 1.617-2.343 3.285v6.507h-3.89V12.297h3.89v1.52h.055c.511-.879 1.384-1.674 2.781-1.674 3.014 0 3.507 1.987 3.507 4.573V23.9z" fill="white"></path>
                </svg>
              </a>
              <div className="mt-4">
                <h2 className="text-2xl md:text-xl font-bold text-[white]">Connect with Me on LinkedIn</h2>
                <p className="text-md md:text-[0.9rem] sm:text-[0rem]  text-[white]">
                  Hi, I'm Arshman Ahmad! I'm passionate about software development,
                  technology, and making impactful projects. Explore my LinkedIn profile
                  to learn more about my professional journey, experiences, and
                  achievements. Let's connect and collaborate......!
                </p>
              </div>
            </div>



          </ReactOwlCarousel>
        </div>
        {/* <div className="w-full mt-[1rem] overflow-hidden flex items-center justify-center mb-[2rem]"></div> */}
        <div className="flex mb-[2rem] mt-[2.5rem] mt-[10rem] items-center justify-center ">
          <div className="w-[80%] flex md:flex-wrap md:flex-col-reverse gap-[2rem]">
            <div className="w-[50%] md:w-full">
              <div className="border-[#d7ebd1] bg-[black]    border-[1rem]  rounded-[1rem]">
                <img src={leafPhoto} className="rounded-none" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full ">
              <div className="font-bold text-3xl md:mb-4 text-[#FFFFFF]">
                Web & App Development Services
              </div>
              <div className="font-normal text-base sm:text-sm text-[#FFFFFF]">
                Hi there! I'm passionate about crafting responsive and intuitive web
                experiences. With expertise in frontend and backend development, I specialize in:
                <ul className="list-disc pl-6 mt-2 text-[#FFFFFF]">
                  <li>Building modern and scalable web applications.</li>
                  <li>Optimizing user interfaces for speed and accessibility.</li>
                  <li>Integrating APIs and backend services.</li>
                  <li>Implementing responsive designs with attention to detail.</li>
                </ul>
                Let's work together to bring your ideas to life!
              </div>
              <button className="mt-6 sm:max-w-[8rem] max-w-[10rem] bg-[#3498DB] hover:bg-[#2980B9] text-[#FFFFFF] px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>

          </div>
        </div>
        {/* <div className="flex flex-col mt-[2rem] items-center justify-center">
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
        </div> */}
        <div className="w-full mt-[12rem] mb-[12rem]">
          <div className="font-[700] mb-[8rem]   text-center text-[2rem] text-[#fff] ">
            My Skills
          </div>
          <div className=" w-full flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-[2rem] p-[2rem] bg-black">
              {project.map((item) => {
                return <SimpleCard
                  projectName={item.projectName}
                  projectDescription={item.description}
                  imageUrl={item.image}
                  url={item.url}
                />
              })}
              <SimpleCard
                projectName="Awesome Project"
                projectDescription="An innovative project that combines cutting-edge technology with user-centric design."
                imageUrl="https://via.placeholder.com/300" // Replace with your image URL
                url="https://example.com/project1" // Replace with your project URL
              />
              <SimpleCard
                projectName="Another Project"
                projectDescription="A revolutionary project that redefines industry standards and delivers exceptional results."
                imageUrl="https://via.placeholder.com/300" // Replace with your image URL
                url="https://example.com/project2" // Replace with your project URL
              />
              <SimpleCard
                projectName="Another Project"
                projectDescription="A revolutionary project that redefines industry standards and delivers exceptional results."
                imageUrl="https://via.placeholder.com/300" // Replace with your image URL
                url="https://example.com/project2" // Replace with your project URL
              />
              <SimpleCard
                projectName="Another Project"
                projectDescription="A revolutionary project that redefines industry standards and delivers exceptional results."
                imageUrl="https://via.placeholder.com/300" // Replace with your image URL
                url="https://example.com/project2" // Replace with your project URL
              />
              <SimpleCard
                projectName="Another Project"
                projectDescription="A revolutionary project that redefines industry standards and delivers exceptional results."
                imageUrl="https://via.placeholder.com/300" // Replace with your image URL
                url="https://example.com/project2" // Replace with your project URL
              />
              <SimpleCard
                projectName="Another Project"
                projectDescription="A revolutionary project that redefines industry standards and delivers exceptional results."
                imageUrl="https://via.placeholder.com/300" // Replace with your image URL
                url="https://example.com/project2" // Replace with your project URL
              />
              <SimpleCard
                projectName="Another Project"
                projectDescription="A revolutionary project that redefines industry standards and delivers exceptional results."
                imageUrl="https://via.placeholder.com/300" // Replace with your image URL
                url="https://example.com/project2" // Replace with your project URL
              />
              {/* Add more SimpleCard components as needed */}
            </div>
          </div>
        </div>




        <div
          itemscope
          itemtype='http://schema.org/Person'
          className='fiverr-seller-widget'
          style={{ display: 'inline-block' }}
        >
          <a
            itemprop='url'
            href='https://www.fiverr.com/arsh153'
            rel="nofollow"
            target="_blank"
            style={{ display: 'inline-block' }}
          >
            <div
              className='fiverr-seller-content'
              id='fiverr-seller-widget-content-ce2857b8-a12b-4bbf-869f-647b369e6410'
              itemprop='contentURL'
              style={{ display: 'none' }}
            ></div>
            <div id='fiverr-widget-seller-data' style={{ display: 'none' }}>
              <div itemprop='name'>arsh153</div>
              <div itemscope itemtype='http://schema.org/Organization'>
                <span itemprop='name'>Fiverr</span>
              </div>
              <div itemprop='jobtitle'>Seller</div>
              {/* asdasdsadas */}
              <div itemprop='description'>
                About Me
                <br />
                👋 Hi there! I'm Arshman, a dedicated and professional React developer with over 3 years of experience in web and app development. I specialize in creating high-quality, responsive, and user-friendly applications using a variety of modern technologies.
                <br />
                My Expertise:
                <br />
                <strong>Frontend Development:</strong>
                <br />
                React JS & React Native
                <br />
                Tailwind CSS
                <br />
                HTML
                <br />
                Bootstrap
                <br />
                <strong>Backend Development:</strong>
                <br />
                Node JS
                <br />
                Express JS
                <br />
                <strong>Programming Languages:</strong>
                <br />
                TypeScript
                <br />
                JavaScript
                <br />
                Services provided by me:
                <br />
                🚀 Web Development
                <br />
                📱 App Development
              </div>
            </div>
          </a>
        </div>






        <div className="w-full    flex items-center justify-center ">
          <div className="w-[60%]  md:w-[90%] flex items-center gap-[1.2rem] justify-center text-center flex-col">
            <div className="font-[700] mt-[4rem]   text-[2rem] text-[#000000]">
              We appreciate your patience as we develop AgerLink into state-of-the-art platform.
            </div>
            <div className="font-[400] text-[1rem] text-[#4E4E4E]">
            </div>
            <div className="font-[600] text-[1rem]">
              We appreciate your patience as we develop AgerLink into state-of-the-art platform.
            </div>
            <Button className="sm:max-w-[8rem] w-[10rem] mb-[5rem] md:mb-[3rem] ">
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="w-[90%] flex items-center justify-center flex-col text-center gap-[2rem]">
            <div className="font-[700] mt-[2rem] text-[#fff]   text-[1.8rem] text-[#434343]">
              Join Us
            </div>
            <div className="text-[#fff] font-[300] text-[16px]">
              To access and benefit from the innovative technologies of AgerLink and AgerLin k DAO, it is essential to be a member of OP Ager Campanus. Our platform is designed to strengthen and enhance the companies that are part of this cooperative, offering advanced tools and resources for the agricultural sector
            </div>
            <div className="text-[#fff] font-[400] text-[1.4rem]">
              By participating in OP Ager Campanus, you will have the opportunity to integrate your company with AgerLink solutions, leveraging the power of the DAO for collective decisions, efficient resource management, and collaboration within the industry. Join us to drive innovation and sustainable development in the agricultural sector.

            </div>

            <div className="md:hidden flex mb-[3rem] justify-center items-center justify-between pl-[1rem] bg-[#fff] p-[0.3rem] gap-[1rem] h-[2.5rem] rounded-[0.5rem]">
              <input
                type="text"
                className="text-[0.8rem] w-full bg-[transparent] outline-none"
                placeholder={"Enter Email Address"}
              />{" "}
              <button className="p-[0.5rem] flex items-center justify-center  w-[12rem] text-[0.8em] text-[#fff]  h-[2rem] bg-primary rounded-[0.5rem]">
                Join Us
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
