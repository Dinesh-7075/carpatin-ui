import React, { useContext } from "react";
import LeftNavBarList from "./LeftNavBarList";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";

const headers = [
  "OVERVIEW",
  "AUTHENTICATION",
  "GUARDS",
  "ANALYTICS",
  "SUPPORT",
];
const headings = {
  OVERVIEW: [
    "Welcome",
    "Getting Started",
    "Dependencies",
    "Environment Variables",
    "Deployment",
    "Routing",
    "Theming",
    "Redux",
    "Server Calls",
    "Settings",
    "RTL",
    "Internationalization",
  ],

  AUTHENTICATION: ["Amplify", "Auth0", "Firebase", "JWT"],
  GUARDS: ["Guest Guard", "Auth Guard", "Role Based Guard"],

  ANALYTICS: ["Introduction", "Configuration", "Event tracking"],
  SUPPORT: ["Changelog", "Contact", "Further Support"],
};

const LeftNavBar = () => {
  const [isHoveredToLeftbar, SetisHoveredToLeftbar] = useState(false);
  const myContext = useContext(AppContext);

  return (
    <div
      className={
        "bg-slate-50 sm:block fixed lg:w-[20%] md:w-[20%] xl:w-[20%] sm:w-[30%] w-[45%] shadow-lg top-[75px] h-[95%] lg:px-3 md:px-3 lg:block md:block hover:overflow-y-auto overflow-hidden " +
        (myContext.isClickedOnMenu ? " z-10 block " : " hidden ") +
        (myContext.isHoveredOnContent ? " hidden " : " block ")
      }
    >
      <div
        onMouseOver={() => SetisHoveredToLeftbar(true)}
        onMouseLeave={() => SetisHoveredToLeftbar(false)}
        className={
          (myContext.isClickedOnMenu
            ? "absolute z-10 overflow-y-auto block "
            : "lg:block md:block sm:block hidden ") +
          "w-[100%] absolute z-10 h-[100%]"
        }
      >
        <div className={"py-1 "}>
          {headers.map((ele) => {
            return (
              <ul
                key={ele}
                className="md:my-2 md:mx-5 lg:my-2 lg:mx-5 ml-3 flex flex-col"
              >
                <li className="text-gray-500 font-bold">{ele}</li>
                {headings[ele].map((ele1) => {
                  let currRoute = ele1.split(" ").join("_").toLowerCase();
                  return (
                    <Link
                      className={
                        window.location.pathname === `/${currRoute}`
                          ? "text-green-400"
                          : "text-black"
                      }
                      to={currRoute}
                    >
                      <LeftNavBarList key={ele1} headingView={ele1} />
                    </Link>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* <Link to={ele1.split(" ").join("_")}><LeftNavBarList activeRoute={window.location.pathname==`/${currRoute}` ? "active" : "inActive"} key={ele1} headingView={ele1} /></Link> */
export default LeftNavBar;
