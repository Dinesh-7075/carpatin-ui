import React from "react";

const LeftNavBarList = ({ headingView }) => {
//   let headers = [
//     "OVERVIEW",
//     "AUTHENTICATION",
//     "GUARDS",
//     "ANALYTICS",
//     "SUPPORT",
//   ];
  return (
    <li className="mx-3 my-2 text-black font-bold text-sm">
      {headingView}
    </li>
  );
};

export default LeftNavBarList;
