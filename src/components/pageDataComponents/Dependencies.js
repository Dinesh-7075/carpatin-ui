import React, { useContext } from "react";
import { IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import AppContext from "../../AppContext";

const Dependencies = () => {
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
        Dependencies
      </Typography>
      <Typography
        paragraph="true"
        style={{ fontSize: "15px", padding: "8px 10px" }}
      >
        The app is built using the latest trends with periodic updates. The
        optional dependencies are used to create app features. If you do not
        need a feature, please remove the dependency to keep the project files
        clean and reduce dependency download and install time.
      </Typography>

      <Typography variant="h6" style={{ fontWeight: "bold" }}>
      Important dependencies
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {['@emotion/cache - Styling', '@mui/icons-material - MUI icons', '@emotion/react - Styling', '@mui/lab - Base theme components', '@emotion/styled - Styling'].map((value) => (
    <ListItem
      key={value}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment"> 
        </IconButton>
      }
    >
      <ListItemText style={{marginLeft:"15px"}} primary={`${value}`} />
    </ListItem>
  ))}
</List>
    </div>
    </div>
    </div>
  );
};

export default Dependencies;
