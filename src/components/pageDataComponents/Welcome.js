import React, { useContext } from "react";
import { Typography } from "@mui/material";
import AppContext from "../../AppContext";
import CoursesDropDown from "./CoursesDropDown";

const Welcome = () => {
  const myContext = useContext(AppContext);

  function handleLeftNavbarVisibility() {
    myContext.setIsHoveredOnContentdata(false);
    myContext.setIsClickedOnMenuBar(false);
    myContext.setisSideBarVisible(false);
  }

  return (
    <div
      className={
        "fixed top-[75px] h-[100%] lg:w-[79.5%] md:w-[78%] px-4 md:block lg:block lg:left-[250px] md:left-[250px] py-1 z-1 w-[100%]" +
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
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            About the documentation
          </Typography>
          <Typography
            paragraph="true"
            style={{
              fontSize: "15px",
              padding: "8px 10px",
              marginBottom: "20px",
            }}
          >
            Welcome to the documentation for Carpatin! This documentation will
            take you from getting started with our kit to customizing it and
            making it work for your use case.
          </Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Something Missing?
          </Typography>
          <Typography
            paragraph="true"
            style={{
              fontSize: "15px",
              padding: "8px 10px",
              marginBottom: "20px",
            }}
          >
            If you have ideas for more "How To" recipes that should be on this
            page, please, let us know or contribute some!
          </Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Feedback
          </Typography>
          <Typography
            paragraph="true"
            style={{ fontSize: "15px", padding: "8px 10px" }}
          >
            We are always happy for you to send your feedback at{" "}
            <span className="underline text-blue-500 cursor-pointer">
              support@deviasio.zendesk.com
            </span>
            .
          </Typography>

          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            About the documentation
          </Typography>
          <Typography
            paragraph="true"
            style={{
              fontSize: "15px",
              padding: "8px 10px",
              marginBottom: "20px",
            }}
          >
            Welcome to the documentation for Carpatin! This documentation will
            take you from getting started with our kit to customizing it and
            making it work for your use case.
          </Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Something Missing?
          </Typography>
          <Typography
            paragraph="true"
            style={{
              fontSize: "15px",
              padding: "8px 10px",
              marginBottom: "20px",
            }}
          >
            If you have ideas for more "How To" recipes that should be on this
            page, please, let us know or contribute some!
          </Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Feedback
          </Typography>
          <Typography
            paragraph="true"
            style={{ fontSize: "15px", padding: "8px 10px" }}
          >
            We are always happy for you to send your feedback at{" "}
            <span className="underline text-blue-500 cursor-pointer">
              support@deviasio.zendesk.com
            </span>
            .
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
