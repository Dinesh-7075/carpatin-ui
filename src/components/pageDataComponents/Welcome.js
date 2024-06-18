import React from "react";
import { Typography } from "@mui/material";
const Welcome = () => {
  return (
    // <div className="float-right  z-auto " id="pageData">

    <div className="fixed top-24 left-1/4 h-[100%] px-3 ">
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        About the documentation
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        Welcome to the documentation for Carpatin! This documentation will take
        you from getting started with our kit to customizing it and making it
        work for your use case.
      </Typography>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Something Missing?
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        If you have ideas for more "How To" recipes that should be on this page,
        please, let us know or contribute some!
      </Typography>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
      Feedback
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        We are always happy for you to send your feedback at <span className="underline text-blue-500 cursor-pointer">support@deviasio.zendesk.com</span>.
      </Typography>

    </div>

    // </div>
  );
};

export default Welcome;
