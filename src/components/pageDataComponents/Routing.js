import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import AppContext from '../../AppContext';

const Routing = () => {
  const myContext = useContext(AppContext);
  return (
    <div className={"fixed top-24 h-[100%] px-3 lg:left-1/4 " + ((myContext.isSideBar ? "ml-5 left-0 " : " left-1/4 ml-8" ))}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Routing
      </Typography>
    </div>
  )
}

export default Routing;