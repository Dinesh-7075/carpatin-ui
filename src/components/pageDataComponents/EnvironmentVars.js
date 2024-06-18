import React from "react";
import { Typography } from "@mui/material";
import { Box, ThemeProvider } from '@mui/material';

const EnvironmentVars = () => {
  return (
    <div className="fixed top-24 left-1/4 h-[100%] px-3 ">
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
  );
};

export default EnvironmentVars;
