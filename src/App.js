import "./index.css";
import Header from "./components/Header";
import LeftNavBar from "./components/LeftNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "./AppContext";
import Welcome from "./components/pageDataComponents/Welcome";
import GettingStarted from "./components/pageDataComponents/GettingStarted";
import EnvironmentVars from "./components/pageDataComponents/EnvironmentVars";
import Dependencies from "./components/pageDataComponents/Dependencies";
import Routing from "./components/pageDataComponents/Routing";
import Themeing from "./components/pageDataComponents/Themeing";
import Redux from "./components/pageDataComponents/Redux";
import ServerCalls from "./components/pageDataComponents/ServerCalls";
import Settings from "./components/pageDataComponents/Settings";
import { useState } from "react";
import Deployment from "./components/pageDataComponents/Deployment";
import CoursesDropDown from "./components/pageDataComponents/CoursesDropDown";
import HTMLIntroduction from "./components/pageDataComponents/HTMLIntroduction";
import HTMLLeftNavBar from "./components/HTMLLeftNavBar";

function App() {

  const [isClickedOnMenuBar, setIsClickedOnMenuBar] = useState(false);
  const [isSideBarVisible, setisSideBarVisible] = useState(true);
  const [isHoveredOnContentdata, setIsHoveredOnContentdata] = useState(false);
  const [hoveredToCourses, setHoveredToCourses] = useState(false);
  const [isClickedOnCourseMenuItem, setIsClickedOnCourseMenuItem] = useState(false);
  const contextObject = {
    isClickedOnMenu: isClickedOnMenuBar,
    isHoveredToCourses: hoveredToCourses,
    isSideBar: isSideBarVisible,
    isHoveredOnContent: isHoveredOnContentdata,
    isClickedOnCoursesItem: isClickedOnCourseMenuItem,
    setIsClickedOnCourseMenuItem,
    setIsHoveredOnContentdata,
    setisSideBarVisible,
    setIsClickedOnMenuBar,
    setHoveredToCourses,
  };

  return (
    <div>
      <AppContext.Provider value={contextObject}>
        <BrowserRouter>
          <Header />
          {contextObject.isClickedOnCoursesItem ? <HTMLLeftNavBar /> : <LeftNavBar />}
          {contextObject.isHoveredToCourses ? (
            <CoursesDropDown />
          ) : (
            <span></span>
          )}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/getting_started" element={<GettingStarted />} />
            <Route path="/dependencies" element={<Dependencies />} />
            <Route
              path="/environment_variables"
              element={<EnvironmentVars />}
            />
            <Route path="/deployment" element={<Deployment />} />
            <Route path="/routing" element={<Routing />} />
            <Route path="/theming" element={<Themeing />} />
            <Route path="/redux" element={<Redux />} />
            <Route path="/server_calls" element={<ServerCalls />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/html/html_introduction" element={<HTMLIntroduction />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
