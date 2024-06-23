import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Chip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppContext from "../AppContext";
const Header = () => {
  const myContext = useContext(AppContext);

  function handleClick() {
    if (myContext.isHoveredOnContent) {
      myContext.setIsClickedOnMenuBar(true);
    } else {
      myContext.setIsClickedOnMenuBar(!myContext.isClickedOnMenu);
      myContext.setisSideBarVisible(!myContext.isSideBar);
    }
  }

  return (
    <header className="fixed z-0 w-[100%] top-0 left-0">
      <div className="mx-1 my-2 flex p-3 min-h-16 shadow-lg justify-between pr-32 items-center">
        <div className="flex justify-between">
          <div className={"flex items-center lg:mr-[500%] md:mr-[150%] mr-[50%] "}>
          <a href="/">
            <svg
              fill="none"
              height="100%"
              viewBox="0 0 24 25"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[28px]"
            >
              <path
                d="M20.8962 14.6031C22.7584 14.6031 23.97 16.5899 23.0899 18.2308C21.019 22.0913 16.8744 24.6739 12.1469 24.4908C5.99299 24.2526 0.981695 19.2348 0.750849 13.0807C0.496994 6.3132 5.90787 0.747423 12.6187 0.747423C17.132 0.747423 21.0588 3.26644 23.0674 6.97506C23.964 8.63081 22.7796 10.6443 20.8967 10.6443C19.9998 10.6443 19.1579 10.1676 18.7362 9.3758C17.4672 6.99312 14.844 5.4346 11.9012 5.73225C8.57113 6.06924 5.92891 8.81192 5.70648 12.1516C5.43778 16.1846 8.64214 19.5515 12.6187 19.5515C15.2538 19.5515 17.5513 18.0717 18.7207 15.9003C19.1517 15.1004 19.9877 14.6031 20.8962 14.6031Z"
                fill="#12B76A"
              ></path>
              <path
                d="M16.5774 12.6237C16.5774 14.8102 14.8049 16.5825 12.6187 16.5825C10.4322 16.5825 8.65991 14.8102 8.65991 12.6237C8.65991 10.4372 10.4322 8.66495 12.6187 8.66495C14.8049 8.66495 16.5774 10.4372 16.5774 12.6237Z"
                fill="#12B76A"
                opacity="0.5"
              ></path>
            </svg>
          </a>
          <Button
            variant="contained"
            disabled
            style={{
              margin: "0px 12px",
              color: "black",
              fontSize: "12px",
              maxWidth: "50px",
              maxHeight: "25px",
              minWidth: "40px",
              minHeight: "20px",
              alignItems: "center",
            }}
          >
            <Chip
              label="v3.0.0"
              class="MuiChip-label MuiChip-labelSmall css-tavflp"
            />
          </Button>
          </div>
          <div className="hover:bg-slate-400 rounded-lg w-18 p-2 lg:mr-[5px] md:mr-[5px] mr-[15px] font-bold cursor-pointer "
            onMouseOver={() => myContext.setHoveredToCourses(true)}
            onMouseLeave={() => myContext.setHoveredToCourses(false)}
          >
            Courses
        </div>
          <div
          onClick={handleClick}
          className={"flex sm:ml-12 md:mx-10 lg:hidden sm:flex items-center cursor-pointer rounded-lg p-2 "+(myContext.isSideBar? " " : " bg-slate-400 " ) + (myContext.isHoveredOnContent ? "bg-white" : "" )}
          title="Menu"
        >
          <MenuIcon />
        </div>
        </div>
        </div>
    </header>
  );
};

export default Header;
