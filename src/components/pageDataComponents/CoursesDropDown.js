import React, { useContext } from "react";
import AppContext from "../../AppContext";
import { Link } from "react-router-dom";

const CoursesDropDown = () => {
  const myContext = useContext(AppContext);

  return (
    <div
      className="absolute z-50 right-0 lg:right-32 md:right-40 lg:top-[63px] top-[65px] md:top-[65px] w-[150px] h-[160px] bg-gray-700 text-sm text-white rounded-lg mx-2 border-[1px] border-gray-900 "
      onMouseOver={() => myContext.setHoveredToCourses(true)}
      onMouseLeave={() => myContext.setHoveredToCourses(false)}
    >
      <div>
        <ul className="list-disc my-2 font-bold px-2 no-underline">
          <Link className="no-underline text-white" onClick={()=>myContext.setIsClickedOnCourseMenuItem(true)} to="/html-introduction"><li className="flex p-2 items-center cursor-pointer">
            <i class="fa-brands fa-html5 mr-2"></i>
            <span className="px-1">HTML</span>
          </li>
          </Link>
          <hr></hr>
          <Link className="no-underline text-white" onClick={()=>myContext.setIsClickedOnCourseMenuItem(false)} to="/">
          <li className="flex p-2 items-center cursor-pointer">
            <i class="fa-brands fa-react mr-2"></i>
            <span className="px-2">ReactJS</span>
          </li>
          </Link>
          <hr></hr>
          <li className="flex p-2 items-center cursor-pointer">
            <i class="fa-brands fa-css3 mr-2"></i>
            <span className="px-2">CSS</span>
          </li>
          <hr></hr>
          <li className="flex p-2 items-center cursor-pointer">
            <i class="fa-brands fa-js mr-2"></i>
            <span className="px-2">JavaScript</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoursesDropDown;
