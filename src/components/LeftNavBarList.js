const LeftNavBarList = ({ headingView, color }) => {
 
  return (
    <li  className={"mr-2 ml-1 my-2 font-bold text-sm hover:bg-gray-200 rounded-md p-2 " } >
      {headingView}
    </li>
  );
};

export default LeftNavBarList;
