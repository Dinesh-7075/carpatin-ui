import React, { useContext } from "react";
import LeftNavBarList from "./LeftNavBarList";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";

const headers = ["OVERVIEW", "AUTHENTICATION", "GUARDS", "ANALYTICS", "SUPPORT"];
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
      onMouseOver={() => SetisHoveredToLeftbar(true)}
      onMouseLeave={() => SetisHoveredToLeftbar(false)}
      className={
        "lg:w-[22%] shadow-lg top-20 h-[85%] px-3 w-[30%] lg:block " +
        (isHoveredToLeftbar
          ? "overflow-y-scroll absolute "
          : "overflow-y-hidden fixed ") + (myContext.isClickedOnMenu ? "  " : " hidden")
      }
    >
      <div className="py-1">
        {headers.map((ele) => {
          return (
            <ul key={ele} className="my-2 mx-5 flex flex-col">
              <li className="text-gray-500 font-bold">{ele}</li>
              {headings[ele].map((ele1) => (
               <Link to={ele1.split(" ").join("_")}><LeftNavBarList key={ele1} headingView={ele1} /></Link>
              ))}      
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNavBar;
