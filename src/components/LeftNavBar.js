import React, { useContext } from "react";
import LeftNavBarList from "./LeftNavBarList";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppContext from "../AppContext";

const LeftNavBar = ({pagesData}) => {
  const myContext = useContext(AppContext);

  return (
    <div
      style={{transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"}}
      className={
        "bg-slate-50 sm:block fixed lg:w-[20%] md:w-[20%] xl:w-[20%] sm:w-[30%] w-[45%] shadow-lg top-[75px] h-[95%] lg:px-3 md:px-3 lg:block md:block hover:overflow-y-auto overflow-hidden " +
        (myContext.isClickedOnMenu ? " z-10 block " : " hidden ") +
        (myContext.isHoveredOnContent ? " hidden " : " block ")
      }
    >
      <div
        className={
          (myContext.isClickedOnMenu
            ? "absolute z-10 overflow-y-auto block "
            : "lg:block md:block sm:block hidden ") +
          "w-[100%] absolute z-10 h-[100%]"
        }
      >
        <div className={"py-1 "}>
              <ul
                className="md:my-2 md:mx-5 lg:my-2 lg:mx-5 ml-3 flex flex-col"
              >
                {pagesData.map((ele) => {
                  let currRoute = (ele.title).split(" ").join("-").toLowerCase();
                  return (
                    <NavLink exact key={ele.id} activeClassName='is-active'
                      className={({ isActive }) => (isActive ? 'active' : 'inactive') + " no-underline"}
                      // className={
                        // (
                        // window.location.pathname === `/${currRoute}`
                        //   ? "text-green-400"
                        //   : "text-black" ) +
                          //  " no-underline"
                      // }
                      to={ele.path}
                    >
                      <LeftNavBarList key={ele.id} headingView={ele.title} />
                    </NavLink>
                  )})}
              </ul>
        </div>
      </div>
    </div>
  );
};

/* <Link to={ele1.split(" ").join("_")}><LeftNavBarList activeRoute={window.location.pathname==`/${currRoute}` ? "active" : "inActive"} key={ele1} headingView={ele1} /></Link> */
export default LeftNavBar;
