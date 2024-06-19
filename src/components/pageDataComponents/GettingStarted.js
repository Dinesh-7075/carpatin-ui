import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Box, ThemeProvider } from '@mui/material';
import AppContext from "../../AppContext";

const GettingStarted = () => {
  const myContext = useContext(AppContext);

  return (
    <div className={"fixed top-24 h-[100%] px-3 lg:left-1/4 " + ((myContext.isSideBar ? "ml-5 left-0 " : " left-1/4 ml-8" ))}>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Getting Started
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        Before proceeding, you'll need to have the last stable NodeJS and npm
        installed on your machine.
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        You can use nvm (macOS/Linux) or nvm-windows to switch Node versions
        between different projects.
      </Typography>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Install dependencies
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        Open the project folder and install its dependencies. You can use any
        package manager you want: Yarn or npm. There might be other package
        managers that were not listed here.
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
      > <p>cd project-folder</p>
         <p>npm install</p></Box> 
    </ThemeProvider>
    </div>
  );
};

export default GettingStarted;
