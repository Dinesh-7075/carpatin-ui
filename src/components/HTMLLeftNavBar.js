import React, { useContext } from "react";
import LeftNavBarList from "./LeftNavBarList";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";

const headers = [
  "HTML OVERVIEW",
  "HTML FORMS",
  "HTML GRAPHICS",
  "HTML MEDIA",
  "HTML APIs",
];
const headings = {
  "HTML OVERVIEW": [
    "HTML Introduction",
    "HTML Editors",
    "HTML Basics",
    "HTML Elements",
    "HTML Attributes",
    "HTML Paragraphs",
    "HTML Styles",
    "HTML Formating",
    "HTML Quotations",
    "HTML Comments",
    "HTML colors",
    "HTML Images",
  ],

  "HTML FORMS": ["HTML Form Attributes", "HTML Input Types", "HTML Form Elements", "HTML Input Elements"],
  "HTML GRAPHICS": ["HTML Canvas", "HTML SVG"],

  "HTML MEDIA": ["HTML Video", "HTML Audio", "HTML Plugins"],
  "HTML APIs": ["HTML Geolocation", "HTML Drag/Drop", "HTML Web storage"],
};

const HTMLLeftNavBar = () => {
  const [isHoveredToLeftbar, SetisHoveredToLeftbar] = useState(false);
  const myContext = useContext(AppContext);

  return (( ((myContext.isClickedOnCoursesItem ? (
    <div
      className={
        "bg-slate-50 sm:block fixed lg:w-[20%] md:w-[20%] xl:w-[20%] sm:w-[30%] w-[45%] shadow-lg top-[75px] h-[95%] lg:px-3 md:px-3 lg:block md:block hover:overflow-y-auto overflow-hidden " +
        (myContext.isClickedOnMenu ? " z-20 block " : " hidden ") +
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
                      to={"/html/" + `${currRoute}`}
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
  ) : " "))));
};

/* <Link to={ele1.split(" ").join("_")}><LeftNavBarList activeRoute={window.location.pathname==`/${currRoute}` ? "active" : "inActive"} key={ele1} headingView={ele1} /></Link> */
export default HTMLLeftNavBar;
