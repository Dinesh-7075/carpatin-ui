import "./index.css";
import Header from "./components/Header";
import LeftNavBar from "./components/LeftNavBar";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import AppContext from "./AppContext";
import Welcome from "./components/pageDataComponents/Welcome";
import GettingStarted from "./components/pageDataComponents/GettingStarted";
import EnvironmentVars from "./components/pageDataComponents/EnvironmentVars";
import Dependencies from "./components/pageDataComponents/Dependencies";
import Routing from "./components/pageDataComponents/Routing";
import Themeing from "./components/pageDataComponents/Themeing";
import Redux from "./components/pageDataComponents/Redux";
import ServerCalls from "./components/pageDataComponents/ServerCalls";
import  Settings  from "./components/pageDataComponents/Settings";
import { useState } from "react";

function App() {
  const [isClickedOnMenuBar, setIsClickedOnMenuBar] = useState(false);
  const [isSideBarVisible, setisSideBarVisible] = useState(true);
  const contextObject = {
    isClickedOnMenu: isClickedOnMenuBar,
    isSideBar: isSideBarVisible,
    setisSideBarVisible,
    setIsClickedOnMenuBar,
  };
  console.log(contextObject.isClickedOnMenu);
  return (
    <div>
      <AppContext.Provider value={contextObject}>
      <BrowserRouter>
        <Header />
        <LeftNavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Getting_Started" element={<GettingStarted />} />
          <Route path="/Dependencies" element={<Dependencies />} />
          <Route path="/Environment_Variables" element={<EnvironmentVars />} />
          <Route path="/Deployment" element={<Dependencies />} />
          <Route path="/Routing" element={<Routing />} />
          <Route path="/Theming" element={<Themeing />} />
          <Route path="/Redux" element={<Redux />} />
          <Route path="/Server_Calls" element={<ServerCalls />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}


export default App;
