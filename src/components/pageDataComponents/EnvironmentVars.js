import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Box, ThemeProvider } from '@mui/material';
import AppContext from "../../AppContext";

const EnvironmentVars = () => {

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
      Environment Variables
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        By default, Next.js compiler looks for .env file in projects root folder and reads its content. In the project files you'll find a file .env.example that contains all the environment variables that were used in the app environment. Not all are required.
      </Typography>

      <Typography variant="h6" style={{ fontWeight: "bold" }}>
      Loading Environment Variables
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        Next.js has built-in support for loading environment variables from .env file into process.env.
      </Typography>
      <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: 100,
          borderRadius: 1,
          bgcolor: 'black',
          color: "white",
          padding:"15px 20px"
        }}
      > <p>DB_HOST=localhost</p>
         <p>DB_USER=myuser</p><p>DB_PASS=mypassword</p></Box> 
    </ThemeProvider>
    </div>
    </div>
    </div>
  );
};

export default EnvironmentVars;
