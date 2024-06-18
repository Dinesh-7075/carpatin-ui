import React from "react";
import { IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";

const Dependencies = () => {
  return (
    <div className="fixed top-24 left-1/4 h-[100%] px-3 ">
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
  );
};

export default Dependencies;
