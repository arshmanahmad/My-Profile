// import React, { useEffect, useRef, useState } from "react";
// import leafPhoto from "../assets/leaf.png";
// import menuBar from "../assets/menu.svg";
// import Button from "../components/Button/Button";
// import SimpleCard from "../components/SimpleCard/SimpleCard";
// import { Link, useNavigate, useNavigation } from "react-router-dom";
// import ReactOwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import arrowC1 from "../assets/arrow-c1.svg";
// import arrowC2 from "../assets/arrow-c2.svg";
// import githubImage from "../assets/github.png";
// import HrProjectImage from "../assets/projectsImages/hr7.png";
// import AgerLink from "../assets/agrilanding.png";
// import Trippn from "../assets/trippn.png";
// import eternal from "../assets/eternal.png";
// import feedy from "../assets/as.png";
// import weatherApp from "../assets/weather app.png";
// import GoroaSkinCare from "../assets/goroa1.png";
// import zelle1 from "../assets/zelle1.png";
// import task from "../assets/task.png";
// import nurseAIHub from "../assets/nurseAIHub.png";
// import chat from "../assets/chat.png";
// import swanThai from "../assets/swanThai.png";
// import AIChat from "../assets/AIChat.png";
// import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

// const Home = () => {
//   useEffect(() => {
//     // Create the script element
//     const script = document.createElement("script");
//     script.id =
//       "fiverr-seller-widget-script-ce2857b8-a12b-4bbf-869f-647b369e6410";
//     script.src =
//       "https://widgets.fiverr.com/api/v1/seller/arsh153?widget_id=ce2857b8-a12b-4bbf-869f-647b369e6410";
//     script.async = true;
//     script.defer = true;
//     script.setAttribute(
//       "data-config",
//       '{"category_name":"Programming \u0026 Tech"}'
//     );

//     // Append the script to the document body
//     document.body.appendChild(script);

//     // Cleanup script when component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
//   const [navigationBar, setNavigationBar] = useState(false);
//   const handleNavigationBar = () => {
//     setNavigationBar(!navigationBar);
//   };
//   const navigate = useNavigate();
//   const project = [
//     {
//       projectName: "HR Portal",
//       description:
//         "HR Management made in React | Vite | TypeScript   Web Application with full fledge functionalities.",
//       url: "https://hr-portal-nu.vercel.app/",
//       image: HrProjectImage,
//     },
//     {
//       projectName: "Swan Thai",
//       description: "Swan Thai made in React | Vite | TypeScript.",
//       // url: "https://swan-thai.vercel.app/",
//       url: "https://swan.eyada360.com/",
//       image: swanThai,
//     },
//     {
//       projectName: "AI Chat App",
//       description:
//         "AI Chat from MetaBrain made for providing ease for documentation concising purpose, means extraction the more informative or required data from the bulk data, yet working on it.",
//       url: "https://ai-chat-app-delta.vercel.app/",
//       image: AIChat,
//     },
//     {
//       projectName: "Agerlink Landing Page",
//       description:
//         "The Landing page which is made in React | Vite | JavaScript of Agerlink, which describes it as an intro for the whole web app.",
//       url: "https://agri-landing.vercel.app/",
//       image: AgerLink,
//     },
//     {
//       projectName: "Nurse AI Hub",
//       description:
//         "Nurse AI Hub made in React typescript, developed to provide ease in the sense of nursing or medical by providing an environment of chatbot in text as well as audio response as described in visual representation.",
//       url: "https://nurse-ai-hub.vercel.app/",
//       image: nurseAIHub,
//     },
//     {
//       projectName: "Feedy",
//       description: "Feedy Web App made in React Js.",
//       url: "https://feedy-eta.vercel.app/",
//       image: feedy,
//     },
//     {
//       projectName: "Weather App",
//       description:
//         "This the Weather App with integration to check the weather in realtime sense in React js.",
//       url: "https://weather-new-app.vercel.app/",
//       image: weatherApp,
//     },
//     {
//       projectName: "Trippn",
//       description: "Trippn Web App made in React js.",
//       url: "https://trippn.vercel.app/",
//       image: Trippn,
//     },
//     {
//       projectName: "Eternal",
//       description: "Eternal Landing page made in React js.",
//       url: "https://eternel-website.vercel.app/",
//       image: eternal,
//     },
//     {
//       projectName: "Goroa Skincare",
//       description: "This the Web App for skincare made in React js.",
//       url: "https://garoa-skincare.vercel.app/",
//       image: GoroaSkinCare,
//     },
//     {
//       projectName: "Chat Box",
//       description: "This the Chat Box interface.",
//       url: "https://66a2990fb65e2b7cd9dc529a--steady-alfajores-a4ab4b.netlify.app/",
//       image: chat,
//     },
//     {
//       projectName: "Zelle",
//       description: "Landing page for Zelle Web App.",
//       url: "https://home-page-iota-nine.vercel.app/",
//       image: zelle1,
//     },
//     {
//       projectName: "Task Management App",
//       description: "Task management app in React Js.",
//       url: "https://task-management-app-blue-omega.vercel.app/",
//       image: task,
//     },
//   ];
//   return (
//     <>
//       <div className="overflow-hidden bg-gradient-to-r  from-[black] to-[#000529] flex flex-col justify-center items-center">
//         <div className="relative w-full items-center flex justify-between py-[3rem] px-[6rem] md:px-[2rem] md:py-8 ">
//           <h1 className="text-[white] text-[2rem] font-bold">Arshman</h1>
//           <div className="md:hidden flex gap-[2rem] text-[white] mt-[1rem] mb-[1rem] font-[600]">
//             <Link to={"/"} className="hover:text-[#434343]">
//               Home
//             </Link>
//             <a
//               href={"https://github.com/arshmanahmad"}
//               target="_blank"
//               className="hover:text-[#434343]"
//             >
//               Github
//             </a>
//             <a
//               className="hover:text-[#434343]"
//               target="_blank"
//               href={"https://www.linkedin.com/in/arshman-ahmad-334829298/"}
//             >
//               LinkedIn
//             </a>
//             {/* <a className="hover:text-[#434343]" target="_blank">
//               Facebook
//             </a> */}
//           </div>
//           <div className="relative flex hidden md:flex  mt-4 mb-4">
//             <img
//               src={menuBar}
//               className="pointer"
//               style={{ cursor: "pointer" }}
//               onClick={handleNavigationBar}
//               alt=""
//             />
//             <div
//               id="navigationBar"
//               className={`p-[1rem] z-50 transform transition-transform duration-300 ease-in-out fixed top-0 right-0 bg-[white] w-[13rem] h-full shadow-lg flex flex-col ${navigationBar ? "translate-x-0" : "translate-x-full"
//                 }`}
//             >
//               <div
//                 className="w-full font-[600] text-primary flex justify-end"
//                 style={{ cursor: "pointer" }}
//                 onClick={handleNavigationBar}
//               >
//                 ✖
//               </div>
//               <div className="w-full mt-[2rem] h-[3rem] flex items-center justify-center">
//                 <h1 className="text-[#000] text-[2rem] font-bold">Dev Sash</h1>
//               </div>
//               <div className=" flex w-full p-[2rem]  gap-[2rem] flex-col text-[#434343] mt-[1rem] mb-[1rem] font-[600]">
//                 <a
//                   href={"https://github.com/arshmanahmad"}
//                   target="_blank"
//                   className="hover:text-[#434343]"
//                 >
//                   Github
//                 </a>
//                 <a
//                   className="hover:text-[#434343]"
//                   target="_blank"
//                   href={"https://www.linkedin.com/in/arshman-ahmad-334829298/"}
//                 >
//                   LinkedIn
//                 </a>
//                 {/* <a className="hover:text-[#434343]" target="_blank">
//                   Facebook
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full mt-[1.5rem] mb-[2rem] px-8 md:text-center flex gap-[0.5rem] flex-col justify-center items-center bg-black py-10">
//           <div className="font-bold text-xl text-[white]">
//             Welcome to My Profile
//           </div>
//           <div className="font-bold text-3xl md:text-2xl text-[white] relative ">
//             Showcasing My Work and Projects{" "}
//             <span className="text-green-600">
//               {" "}
//               {/* Placeholder for any additional styling */}
//             </span>{" "}
//             in the Digital World
//           </div>
//           <div className="font-normal  md:w-full text-sm text-[white] text-center">
//             Explore my social media profiles and projects that I have worked on.
//             Connect with me to know more about my work and collaborations.
//           </div>
//         </div>

//         <div className="w-full mb-[2rem] flex items-center justify-center md:mb-[3rem]">
//           <ReactOwlCarousel
//             className="banner owl-theme"
//             nav={true}
//             navText={[`<img  src='${arrowC1}'>`, `<img  src='${arrowC2}'>`]}
//             dots={false}
//             autoplay={1}
//             items={1}
//             start={1}
//             autoplayHoverPause={true}
//             autoplayTimeout={4000}
//             smartSpeed={1500}
//             loop
//           >
//             <div className="item border mx-[20%] md:mx-[10%] bg-[#1a365d] bg-black bg-opacity-50 p-8 flex flex-col justify-center items-center text-center gap-4 text-white rounded-lg shadow-lg">
//               <a href="https://github.com/arshmanahmad">
//                 <svg
//                   style={{ cursor: "pointer" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="100"
//                   height="100"
//                   fill="white"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.262.82-.58 0-.287-.013-1.04-.013-1.905-3.01.655-3.905-.732-4.155-1.405-.14-.358-.747-1.405-1.28-1.685-.437-.23-1.06-.795-.013-.808.985-.013 1.68.905 1.92 1.28 1.12 1.896 2.92 1.37 3.628 1.042.11-.808.437-1.37.795-1.685-2.785-.313-5.72-1.395-5.72-6.202 0-1.37.49-2.495 1.28-3.37-.135-.313-.585-1.595.135-3.32 0 0 1.05-.337 3.44 1.28 1-.287 2.075-.426 3.135-.426 1.06 0 2.125.14 3.135.426 2.385-1.617 3.435-1.28 3.435-1.28.72 1.725.27 3.007.135 3.32.795.875 1.28 2 1.28 3.37 0 4.82-2.94 5.885-5.735 6.185.45.387.855 1.15.855 2.32 0 1.675-.015 3.025-.015 3.44 0 .32.21.7.825.58C20.565 21.793 24 17.3 24 12c0-6.63-5.37-12-12-12z"
//                   />
//                 </svg>
//               </a>
//               <div className="w-full flex items-center">
//                 <a
//                   href=""
//                   to={"https://github.com/arshmanahmad"}
//                   className="hover:text-primary w-full"
//                 >
//                   <img style={{ cursor: "pointer" }} src={githubImage} />
//                 </a>
//               </div>
//             </div>

//             <div className="item border mx-[20%] md:mx-[10%] bg-[#1a365d] p-8 flex flex-col justify-center items-center text-center gap-4 text-white rounded-lg shadow-lg">
//               <a href={"https://www.linkedin.com/in/arshman-ahmad-334829298/"}>
//                 <svg
//                   style={{ cursor: "pointer" }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 34 34"
//                   width="100"
//                   height="100"
//                 >
//                   <rect
//                     width="100%"
//                     height="100%"
//                     fill="#0077B5"
//                     rx="4.5"
//                     ry="4.5"
//                   ></rect>
//                   <path
//                     d="M12.225 12.297h-3.9V23.9h3.9zM10.275 6.839c-1.253 0-2.018.841-2.018 1.93 0 1.067.746 1.93 1.972 1.93h.022c1.254 0 2.019-.864 2.019-1.93-.023-1.089-.767-1.93-1.995-1.93zm14.514 5.458h-3.891v1.579h.028c.512-.864 1.4-1.64 2.882-1.64 3.094 0 3.66 2.034 3.66 4.681v5.978h-3.9v-5.558c0-1.398-.026-3.197-2.023-3.197-2.024 0-2.335 1.517-2.335 3.092v5.664h-3.9V12.297h3.747v1.589h.054c.523-.99 1.799-1.999 3.702-1.999 3.946 0 4.678 2.593 4.678 5.963V23.9h-3.9V17.61c0-1.528-.026-3.502-2.011-3.502-2.013 0-2.343 1.617-2.343 3.285v6.507h-3.89V12.297h3.89v1.52h.055c.511-.879 1.384-1.674 2.781-1.674 3.014 0 3.507 1.987 3.507 4.573V23.9z"
//                     fill="white"
//                   ></path>
//                 </svg>
//               </a>
//               <div className="mt-4">
//                 <h2 className="text-2xl md:text-xl font-bold text-[white]">
//                   Connect with Me on LinkedIn
//                 </h2>
//                 <p className="text-md md:text-[0.9rem] sm:text-[0rem]  text-[white]">
//                   Hi, I'm Arshman Ahmad! I'm passionate about software
//                   development, technology, and making impactful projects.
//                   Explore my LinkedIn profile to learn more about my
//                   professional journey, experiences, and achievements. Let's
//                   connect and collaborate..!
//                 </p>
//               </div>
//             </div>
//           </ReactOwlCarousel>
//         </div>
//         {/* <div className="w-full mt-[1rem] overflow-hidden flex items-center justify-center mb-[2rem]"></div> */}
//         <div className="flex mb-[2rem] mt-[2.5rem] mt-[10rem] items-center justify-center ">
//           <div className="w-[80%] flex md:flex-wrap md:flex-col-reverse gap-[2rem]">
//             <div className="w-[50%] md:w-full">
//               <div className="border-[#d7ebd1] bg-[black]    border-[1rem]  rounded-[1rem]">
//                 <img src={leafPhoto} className="rounded-none" alt="" />
//               </div>
//             </div>
//             <div className="flex flex-col justify-center w-full ">
//               <div className="font-bold text-3xl md:mb-4 text-[#FFFFFF]">
//                 Web & App Development Services
//               </div>
//               <div className="font-normal text-base sm:text-sm text-[#FFFFFF]">
//                 Hi there! I'm passionate about crafting responsive and intuitive
//                 web experiences. With expertise in frontend and backend
//                 development, I specialize in:
//                 <ul className="list-disc pl-6 mt-2 text-[#FFFFFF]">
//                   <li>Building modern and scalable web applications.</li>
//                   <li>
//                     Optimizing user interfaces for speed and accessibility.
//                   </li>
//                   <li>Integrating APIs and backend services.</li>
//                   <li>
//                     Implementing responsive designs with attention to detail.
//                   </li>
//                 </ul>
//                 Let's work together to bring your ideas to life!
//               </div>
//               <a
//                 href="https://github.com/arshmanahmad"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="mt-6 sm:max-w-[8rem] max-w-[10rem] bg-[#3498DB] hover:bg-[#2980B9] text-[#FFFFFF] px-4 py-2 rounded-md">
//                   Learn More
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* <div className="flex flex-col mt-[2rem] items-center justify-center">
//           <div className="font-[700] mt-[3rem] mb-[3rem] text-[1.8rem] ">
//             {t("KeyFeatures.Heading")}
//           </div>
//           <div className="flex mt-[2rem] mb-[2rem] justify-center items-center">
//             <div className="w-[90%] grid grid-cols-12 md:w-[90%] justify-center flex gap-x-[2rem] gap-y-[4rem] items-center">
//               {t("KeyFeatures.Features", { returnObjects: true }).map(
//                 (feature, index) => {
//                   return (
//                     <KeyCards
//                       className="col-span-3 w-full  h-full md:col-span-6 sm:col-span-12"
//                       heading={feature.Title}
//                       about={feature.Description}
//                       number={"0" + (index + 1)}
//                     />
//                   );
//                 }
//               )}
//             </div>
//           </div>
//         </div> */}
//         <div className="w-full mt-[10rem] mb-[8rem]">
//           <div className="font-[700]    text-center text-[2rem] text-[#fff] ">
//             My Projects
//           </div>
//           <div className="font-[500] mb-[2rem]   text-center text-[1rem] text-[#fff] ">
//             Some of my projects are given below:
//           </div>
//           <div className=" w-full flex items-center justify-center">
//             <div className="flex flex-wrap justify-center gap-[2rem] p-[2rem] bg-black">
//               {project.map((item) => {
//                 return (
//                   <SimpleCard
//                     projectName={item.projectName}
//                     projectDescription={item.description}
//                     imageUrl={item.image}
//                     url={item.url}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <div
//           itemscope
//           itemtype="http://schema.org/Person"
//           className="fiverr-seller-widget"
//           style={{ display: "inline-block" }}
//         >
//           <a
//             itemprop="url"
//             href="https://www.fiverr.com/arsh153"
//             rel="nofollow"
//             target="_blank"
//             style={{ display: "inline-block" }}
//           >
//             <div
//               className="fiverr-seller-content"
//               id="fiverr-seller-widget-content-ce2857b8-a12b-4bbf-869f-647b369e6410"
//               itemprop="contentURL"
//               style={{ display: "none" }}
//             ></div>
//             <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
//               <div itemprop="name">arsh153</div>
//               <div itemscope itemtype="http://schema.org/Organization">
//                 <span itemprop="name">Fiverr</span>
//               </div>
//               <div itemprop="jobtitle">Seller</div>
//               {/* asdasdsadas */}
//               <div itemprop="description">
//                 About Me
//                 <br />
//                 👋 Hi there! I'm Arshman, a dedicated and professional React
//                 developer with over 3 years of experience in web and app
//                 development. I specialize in creating high-quality, responsive,
//                 and user-friendly applications using a variety of modern
//                 technologies.
//                 <br />
//                 My Expertise:
//                 <br />
//                 <strong>Frontend Development:</strong>
//                 <br />
//                 React JS & React Native
//                 <br />
//                 Tailwind CSS
//                 <br />
//                 HTML
//                 <br />
//                 Bootstrap
//                 <br />
//                 <strong>Backend Development:</strong>
//                 <br />
//                 Node JS
//                 <br />
//                 Express JS
//                 <br />
//                 <strong>Programming Languages:</strong>
//                 <br />
//                 TypeScript
//                 <br />
//                 JavaScript
//                 <br />
//                 Services provided by me:
//                 <br />
//                 🚀 Web Development
//                 <br />
//                 📱 App Development
//               </div>
//             </div>
//           </a>
//         </div>

//         <div className="w-full    flex items-center justify-center ">
//           <div className="w-[60%]  md:w-[90%] flex items-center gap-[1.2rem] justify-center text-center flex-col">
//             <div className="font-[500] mt-[4rem]   text-[2rem] text-[#fff]">
//               With over 3 years in the industry, I have successfully delivered
//               numerous projects that meet and exceed client expectations. I
//               thrive in dynamic and collaborative environments, consistently
//               providing high-quality solutions.
//             </div>
//             <div className="font-[400] text-[1rem] text-[#fff]"></div>
//             <div className="font-[600] text-[1.2rem] text-[#fff]">
//               {/* We appreciate yasdasdasdfasour patience as we develop AgerLink into state-of-the-art platforasdasdadasdasm. */}
//             </div>
//             <a
//               href="https://github.com/arshmanahmad"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="sm:max-w-[8rem] w-[10rem] mb-[5rem] md:mb-[3rem] ">
//                 Learn More
//               </Button>
//             </a>
//           </div>
//         </div>
//         <div className="w-full flex items-center justify-center ">
//           <div className="w-[90%] flex items-center justify-center flex-col text-center gap-[2rem]">
//             <div className="font-[700] mt-[2rem] text-[#fff] text-[1.8rem]">
//               Contact Us
//             </div>
//             <div className="text-[#fff] font-[300] text-[16px]">
//               We value open communication and are here to assist you with any
//               questions or concerns. Our dedicated support team is available to
//               provide you with the information you need. Reach out to us via
//               email, phone, or through our contact form, and we will respond
//               promptly. We look forward to hearing from you and helping you in
//               any way we can.
//             </div>
//             <div className="text-[#fff] font-[400] text-[1.4rem]">
//               Connect with us on social media to stay updated on our latest
//               news, projects, and opportunities. Follow us on LinkedIn, Twitter,
//               and Facebook to join our growing community and engage with our
//               content. Your feedback and inquiries are important to us, and we
//               are committed to providing you with exceptional service.
//             </div>

//             <div className="flex flex-col items-center gap-[1rem]">
//               <div className="text-[#fff] font-[400] text-[1.4rem]">
//                 Phone:{" "}
//                 <a href="tel:+1234567890" className="text-primary">
//                   03156054390
//                 </a>
//               </div>
//               <div className="text-[#fff] font-[400] text-[1.4rem]">
//                 Email:{" "}
//                 <a href="mailto:info@example.com" className="text-primary">
//                   arshmanwhiz@gmail.com
//                 </a>
//               </div>
//               <div className="flex items-center gap-[1rem]">
//                 <a
//                   href="https://www.linkedin.com/in/arshman-ahmad-334829298/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedin className="text-[#fff] text-[2rem] hover:text-primary" />
//                 </a>
//                 <a
//                   href="https://github.com/arshmanahmad"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGithub className="text-[#fff] text-[2rem] hover:text-primary" />
//                 </a>
//                 {/* <a href="" target="_blank" rel="noopener noreferrer">
//                   <FaFacebook className="text-[#fff] text-[2rem] hover:text-primary" />
//                 </a> */}
//               </div>
//             </div>

//             <div className="md:hidden flex mb-[3rem] justify-center items-center justify-between pl-[1rem] bg-[#fff] p-[0.3rem] gap-[1rem] h-[2.5rem] rounded-[0.5rem]">
//               <input
//                 type="text"
//                 className="text-[0.8rem] w-full bg-[transparent] outline-none"
//                 placeholder="Enter Email Address"
//               />
//               <button className="p-[0.5rem] flex items-center justify-center w-[12rem] text-[0.8rem] text-[#fff] h-[2rem] bg-primary rounded-[0.5rem]">
//                 Join Us
//               </button>
//             </div>
//             <div className="flex flex-col w-[100%] items-center justify-center hidden md:flex">
//               <input
//                 type="text"
//                 className="text-[0.7rem] text-center w-full font-[500] bg-[#fff] text-[1rem] p-[0.8rem] rounded-[0.5rem] outline-none"
//                 placeholder="Enter Email Address"
//               />
//               <button className="p-[0.5rem] mt-[1rem] mb-[1.5rem] font-[500] text-[1rem] flex items-center justify-center w-full text-[0.7rem] text-primary bg-[#fff] rounded-[0.5rem]">
//                 Subscribe Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Star,
  Download,
  ArrowRight,
  ChevronDown,
  MapPin,
  Calendar,
  Award,
  Users,
  Briefcase,
} from "lucide-react"
import { Button } from "../components/Button"
import { Card, CardContent } from "../components/Card"
import { Badge } from "../components/Badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const skills = [
    { name: "React.js", level: 95, icon: <Code className="w-5 h-5" />, color: "from-[#61DAFB] to-[#21D4FD]" },
    { name: "Node.js", level: 90, icon: <Server className="w-5 h-5" />, color: "from-[#68A063] to-[#8CC84B]" },
    { name: "MongoDB", level: 85, icon: <Database className="w-5 h-5" />, color: "from-[#4DB33D] to-[#3FA037]" },
    { name: "Express.js", level: 88, icon: <Server className="w-5 h-5" />, color: "from-[#404040] to-[#000000]" },
    { name: "React Native", level: 82, icon: <Smartphone className="w-5 h-5" />, color: "from-[#61DAFB] to-[#764ABC]" },
    { name: "TypeScript", level: 87, icon: <Code className="w-5 h-5" />, color: "from-[#3178C6] to-[#235A97]" },
    { name: "Next.js", level: 90, icon: <Globe className="w-5 h-5" />, color: "from-[#000000] to-[#404040]" },
    { name: "Tailwind CSS", level: 92, icon: <Code className="w-5 h-5" />, color: "from-[#06B6D4] to-[#0891B2]" },
  ]

  const projects = [
    {
      title: "HR Portal",
      description:
        "Comprehensive HR Management system built with React, TypeScript, and Vite. Features full-fledged functionalities for modern HR operations including employee management, payroll, and analytics.",
      image: "/placeholder.svg?height=300&width=500",
      url: "https://hr-portal-nu.vercel.app/",
      tech: ["React", "TypeScript", "Vite", "Tailwind"],
      featured: true,
      gradient: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      title: "Swan Thai Restaurant",
      description:
        "Modern restaurant website with elegant design, built using React, TypeScript, and Vite for optimal performance and user experience.",
      image: "/placeholder.svg?height=300&width=500",
      url: "https://swan.eyada360.com/",
      tech: ["React", "TypeScript", "Vite"],
      gradient: "from-[#F97316] to-[#EF4444]",
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chat application for document processing and data extraction, featuring advanced AI capabilities and real-time responses.",
      image: "/placeholder.svg?height=300&width=500",
      url: "https://ai-chat-app-delta.vercel.app/",
      tech: ["React", "AI/ML", "Node.js"],
      gradient: "from-[#10B981] to-[#14B8A6]",
    },
    {
      title: "Nurse AI Hub",
      description:
        "Healthcare-focused AI platform providing text and audio responses for nursing and medical assistance with advanced healthcare analytics.",
      image: "/placeholder.svg?height=300&width=500",
      url: "https://nurse-ai-hub.vercel.app/",
      tech: ["React", "TypeScript", "AI/ML"],
      gradient: "from-[#3B82F6] to-[#4F46E5]",
    },
    {
      title: "Weather Application",
      description:
        "Real-time weather tracking application with intuitive interface and accurate forecasting capabilities using modern APIs.",
      image: "/placeholder.svg?height=300&width=500",
      url: "https://weather-new-app.vercel.app/",
      tech: ["React", "API Integration", "JavaScript"],
      gradient: "from-[#0EA5E9] to-[#3B82F6]",
    },
    {
      title: "Task Management System",
      description:
        "Comprehensive task management solution for improved productivity and team collaboration with real-time updates.",
      image: "/placeholder.svg?height=300&width=500",
      url: "https://task-management-app-blue-omega.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-[#8B5CF6] to-[#7C3AED]",
    },
  ]

  const stats = [
    { icon: <Calendar className="w-6 h-6" />, label: "Years Experience", value: "3+", color: "text-[#3B82F6]" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Projects Completed", value: "50+", color: "text-[#10B981]" },
    { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "30+", color: "text-[#8B5CF6]" },
    { icon: <Award className="w-6 h-6" />, label: "Technologies", value: "15+", color: "text-[#F59E0B]" },
  ]

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#000529]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#EC4899] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#111827]/80 backdrop-blur-lg border-b border-[#374151]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent"
            >
              Arshman Ahmad
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${activeSection === item.href.substring(1)
                    ? "text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20"
                    : "text-[#D1D5DB] hover:text-[#3B82F6] hover:bg-[#3B82F6]/5"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#FFFFFF] p-2 rounded-lg bg-[#1F2937]/50 hover:bg-[#374151]/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#111827]/95 backdrop-blur-lg border-t border-[#374151]/50"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="block w-full text-left text-[#D1D5DB] hover:text-[#3B82F6] hover:bg-[#3B82F6]/10 px-3 py-2 rounded-lg transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-[#3B82F6] text-lg font-medium mb-2 px-4 py-2 bg-[#3B82F6]/10 rounded-full border border-[#3B82F6]/20"
              >
                👋 Hello, I'm
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold text-[#FFFFFF] mt-4 mb-4"
              >
                Arshman
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]">
                  Ahmad
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl lg:text-3xl text-[#D1D5DB] mb-6 font-semibold"
              >
                <span className="text-[#10B981]">MERN</span> Stack Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-[#9CA3AF] max-w-2xl leading-relaxed"
              >
                Passionate full-stack developer with <span className="text-[#3B82F6] font-semibold">3+ years</span> of
                experience crafting exceptional web applications using
                <span className="text-[#10B981] font-semibold"> MongoDB</span>,
                <span className="text-[#F59E0B] font-semibold"> Express.js</span>,
                <span className="text-[#61DAFB] font-semibold"> React.js</span>, and
                <span className="text-[#68A063] font-semibold"> Node.js</span>. I transform ideas into powerful digital
                solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-[#FFFFFF] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#FFFFFF] transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                <Download className="mr-2 w-4 h-4" /> Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/arshmanahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1F2937]/50 hover:bg-[#374151]/50 text-[#9CA3AF] hover:text-[#FFFFFF] rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/arshman-ahmad-334829298/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 text-[#3B82F6] hover:text-[#60A5FA] rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:arshmanwhiz@gmail.com"
                className="p-3 bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#10B981] hover:text-[#34D399] rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-[#111827] p-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Arshman Ahmad"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#61DAFB] to-[#21D4FD] rounded-full p-3 shadow-lg"
              >
                <Code className="w-6 h-6 text-[#FFFFFF]" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#68A063] to-[#8CC84B] rounded-full p-3 shadow-lg"
              >
                <Database className="w-6 h-6 text-[#FFFFFF]" />
              </motion.div>
              <motion.div
                animate={{ x: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -left-6 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full p-3 shadow-lg"
              >
                <Server className="w-6 h-6 text-[#FFFFFF]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="bg-[#1F2937]/30 backdrop-blur-sm rounded-xl p-4 text-center border border-[#374151]/50"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>{stat.icon}</div>
                <div className="text-2xl font-bold text-[#FFFFFF]">{stat.value}</div>
                <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-[#3B82F6] animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">Me</span>
            </h2>
            <p className="text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
              I'm a passionate MERN stack developer with over 3 years of experience in creating robust, scalable web
              applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#1E3A8A]/20 to-[#0891B2]/20 border-[#3B82F6]/20 backdrop-blur-sm h-full hover:border-[#60A5FA]/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-[#61DAFB] to-[#21D4FD] rounded-full p-4 w-16 h-16 mx-auto mb-6 shadow-lg">
                    <Code className="w-8 h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Frontend Development</h3>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    Expert in React.js, Next.js, and modern frontend technologies. Creating responsive, interactive user
                    interfaces with exceptional UX and performance optimization.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-[#61DAFB]/20 text-[#61DAFB] border-[#61DAFB]/30">React</Badge>
                    <Badge className="bg-[#000000]/20 text-[#FFFFFF] border-[#000000]/30">Next.js</Badge>
                    <Badge className="bg-[#3178C6]/20 text-[#3178C6] border-[#3178C6]/30">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#14532D]/20 to-[#059669]/20 border-[#10B981]/20 backdrop-blur-sm h-full hover:border-[#34D399]/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-[#68A063] to-[#8CC84B] rounded-full p-4 w-16 h-16 mx-auto mb-6 shadow-lg">
                    <Server className="w-8 h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Backend Development</h3>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    Proficient in Node.js, Express.js, and database management. Building secure, scalable server-side
                    applications and RESTful APIs with optimal performance.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-[#68A063]/20 text-[#68A063] border-[#68A063]/30">Node.js</Badge>
                    <Badge className="bg-[#000000]/20 text-[#FFFFFF] border-[#000000]/30">Express</Badge>
                    <Badge className="bg-[#4DB33D]/20 text-[#4DB33D] border-[#4DB33D]/30">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#581C87]/20 to-[#BE185D]/20 border-[#8B5CF6]/20 backdrop-blur-sm h-full hover:border-[#A78BFA]/40 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full p-4 w-16 h-16 mx-auto mb-6 shadow-lg">
                    <Smartphone className="w-8 h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Mobile Development</h3>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    Experienced in React Native for cross-platform mobile applications. Delivering native performance
                    with shared codebase and seamless user experiences.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-[#61DAFB]/20 text-[#61DAFB] border-[#61DAFB]/30">React Native</Badge>
                    <Badge className="bg-[#000020]/20 text-[#FFFFFF] border-[#000020]/30">Expo</Badge>
                    <Badge className="bg-[#4F46E5]/20 text-[#4F46E5] border-[#4F46E5]/30">Mobile UI</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#111827]/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3B82F6]">Skills</span>
            </h2>
            <p className="text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#1F2937]/30 backdrop-blur-sm rounded-xl p-6 border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`text-[#FFFFFF] bg-gradient-to-r ${skill.color} p-2 rounded-lg`}>{skill.icon}</div>
                    <span className="text-[#FFFFFF] font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className={`font-bold text-lg bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-[#374151]/50 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]">
                Projects
              </span>
            </h2>
            <p className="text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and expertise in modern web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group ${project.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <Card className="bg-[#1F2937]/30 border-[#374151]/50 backdrop-blur-sm overflow-hidden hover:border-[#4B5563]/50 transition-all duration-300 h-full transform hover:scale-105 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/20 to-transparent`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-[#FFFFFF] border-0 shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 group-hover:text-[#3B82F6] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#D1D5DB] mb-4 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-[#374151]/50 text-[#D1D5DB] border-[#4B5563]/50 hover:bg-[#4B5563]/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#111827]/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3B82F6]">Touch</span>
            </h2>
            <p className="text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
              Ready to work together? Let's discuss your project and bring your ideas to life with cutting-edge
              technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 p-4 bg-[#1F2937]/30 rounded-xl border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full p-3 shadow-lg">
                  <Mail className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <h3 className="text-[#FFFFFF] font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:arshmanwhiz@gmail.com"
                    className="text-[#10B981] hover:text-[#34D399] transition-colors"
                  >
                    arshmanwhiz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#1F2937]/30 rounded-xl border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] rounded-full p-3 shadow-lg">
                  <Phone className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <h3 className="text-[#FFFFFF] font-semibold text-lg">Phone</h3>
                  <a href="tel:+923156054390" className="text-[#3B82F6] hover:text-[#60A5FA] transition-colors">
                    +92 315 6054390
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#1F2937]/30 rounded-xl border border-[#374151]/50 hover:border-[#4B5563]/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full p-3 shadow-lg">
                  <MapPin className="w-6 h-6 text-[#FFFFFF]" />
                </div>
                <div>
                  <h3 className="text-[#FFFFFF] font-semibold text-lg">Location</h3>
                  <span className="text-[#8B5CF6]">Pakistan</span>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-[#FFFFFF] font-semibold text-lg mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/arshmanahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1F2937]/50 hover:bg-[#374151]/50 rounded-full p-3 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Github className="w-6 h-6 text-[#9CA3AF] group-hover:text-[#FFFFFF]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arshman-ahmad-334829298/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3B82F6]/20 hover:bg-[#3B82F6]/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Linkedin className="w-6 h-6 text-[#3B82F6] group-hover:text-[#60A5FA]" />
                  </a>
                  <a
                    href="https://www.fiverr.com/arsh153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#10B981]/20 hover:bg-[#10B981]/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Globe className="w-6 h-6 text-[#10B981] group-hover:text-[#34D399]" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-[#1F2937]/30 border-[#374151]/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-[#FFFFFF] font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#374151]/30 border border-[#4B5563]/50 rounded-lg text-[#FFFFFF] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#FFFFFF] font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-[#374151]/30 border border-[#4B5563]/50 rounded-lg text-[#FFFFFF] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[#FFFFFF] font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#374151]/30 border border-[#4B5563]/50 rounded-lg text-[#FFFFFF] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
                        placeholder="Project Discussion"
                      />
                    </div>
                    <div>
                      <label className="block text-[#FFFFFF] font-medium mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 bg-[#374151]/30 border border-[#4B5563]/50 rounded-lg text-[#FFFFFF] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 resize-none transition-all duration-300"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-[#FFFFFF] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#374151]/50 bg-[#111827]/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#9CA3AF]">
            © 2025 <span className="text-[#3B82F6] font-semibold">Arshman Ahmad</span>. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
