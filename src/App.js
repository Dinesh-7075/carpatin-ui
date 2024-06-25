import "./index.css";
import Header from "./components/Header";
import LeftNavBar from "./components/LeftNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "./AppContext";
import ContentPage from "./components/pageDataComponents/ContentPage";
import { useState } from "react";
import CoursesDropDown from "./components/pageDataComponents/CoursesDropDown";
import ReactPage from "./pageContentFiles/ReactPage";
import HTMLPage from "./pageContentFiles/HTMLPage";

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
          {contextObject.isClickedOnCoursesItem ? <LeftNavBar pagesData={HTMLPage}/> : <LeftNavBar pagesData={ReactPage}/>}
          {contextObject.isHoveredToCourses ? (
            <CoursesDropDown />
          ) : (
            <span></span>
          )}
          <Routes>
            <Route path="/" element={<ContentPage 
                      pageTitle={ReactPage[0].title}
                      pageContent={ReactPage[0].content}
                      pageDetails={ReactPage[0]}
                    />}></Route>
            {(contextObject.isClickedOnCoursesItem) ? (HTMLPage.map((page) => (
                <Route
                  key={page.id}
                  path={page.path}
                  element={
                    <ContentPage 
                      pageTitle={page.title}
                      pageContent={page.content}
                      pageDetails={page}
                    />
                  }
                />
              ))) :(ReactPage.map((page) => (
                <Route
                  key={page.id}
                  path={page.path}
                  element={
                    <ContentPage 
                      pageTitle={page.title}
                      pageContent={page.content}
                      pageDetails={page}
                    />
                  }
                />
              )))}
          
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import DocumentationPage from "./viewcourse/DocumentationPage";
// import ReactPage from "./pageContentFiles/ReactPage";
// const Courses = () => {
//   return (
//     <div>
//       <Router>
//         <div className="app-container">
//           <LeftNavBar pagesData={ReactPage} />

//           <div className="main-content">
//             <Routes>
//               {ReactPage.map((page) => (
//                 <Route
//                   key={page.id}
//                   path={page.path}
//                   element={
//                     <DocumentationPage
//                       pageTitle={page.title}
//                       pageContent={page.content}
//                       pageDetails={page}
//                     />
//                   }
//                 />
//               ))}
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </div>
//   );
// };

// export default Courses;
