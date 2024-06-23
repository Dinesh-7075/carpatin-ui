import { Typography } from "@mui/material";
import React, { useContext } from "react";
import AppContext from "../../AppContext";

const ServerCalls = () => {
  const myContext = useContext(AppContext);

  function handleLeftNavbarVisibility() {
    myContext.setIsHoveredOnContentdata(false);
    myContext.setIsClickedOnMenuBar(false);
    myContext.setisSideBarVisible(false);
  }

  return (
    <div
      className={
        "fixed top-[75px] h-[100%] lg:w-[79%] md:w-[78%] px-4 md:block lg:block lg:left-[250px] md:left-[250px] py-1 z-1 w-[100%]" +
        (myContext.isSideBar ? " left-0 w-[100%] block z-1 " : " ")
      }
      onMouseOver={() => myContext.setIsHoveredOnContentdata(true)}
      onMouseLeave={handleLeftNavbarVisibility}
    >
      <div
        className={
          "absolute w-[100%] h-[90%] left-1 overflow-y-scroll mx-2 lg:pl-5 md:pl-5 pb-5 px-2 " +
          (myContext.isSideBar
            ? "absolute z-1 "
            : " lg:w-[100%] md:w-[100%] w-[100%]")
        }
      >
        <div className="pt-8 z-1">
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Server Calls
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ServerCalls;
