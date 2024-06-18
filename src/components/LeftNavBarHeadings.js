import React from 'react'

const LeftNavBarHeadings = ({headingView}) => {
    let headers = ["OVERVIEW", "AUTHENTICATION", "GUARDS", "ANALYTICS", "SUPPORT"];
  return (
    <div>
        <ul className='my-2 mx-5 flex flex-col'>
            {
                headers.map((ele)=><li key="ele" className='font-bold text-gray-500'>{ele}</li>)
            }
        </ul>
       
    </div>
  )
}

export default LeftNavBarHeadings;


// <ul className='my-2 mx-5 flex flex-col'>
//                 <li className='text-gray-500 font-bold'>OVERVIEW</li>
//                 {headings["OVERVIEW"].map((ele) => 
//                     <LeftNavBarList headingView = {ele} />
//                 )}
//             </ul>
//             <ul className='my-2 mx-5 flex flex-col'>
//                 <li className='text-gray-500 font-bold'>AUTHENTICATION</li>
//                 {headings["AUTHENTICATION"].map((ele) => 
//                     <LeftNavBarList headingView = {ele} />
//                 )}
//             </ul>
//             <ul className='my-2 mx-5 flex flex-col'>
//                 <li className='text-gray-500 font-bold'>GUARDS</li>
//                 {headings["GUARDS"].map((ele) => 
//                     <LeftNavBarList headingView = {ele} />
//                 )}
//             </ul>
//             <ul className='my-2 mx-5 flex flex-col'>
//                 <li className='text-gray-500 font-bold'>ANALYTICS</li>
//                 {headings["ANALYTICS"].map((ele) => 
//                     <LeftNavBarList headingView = {ele} />
//                 )}
//             </ul>
//             <ul className='my-2 mx-5 flex flex-col'>
//                 <li className='text-gray-500 font-bold'>SUPPORT</li>
//                 {headings["SUPPORT"].map((ele) => 
//                     <LeftNavBarList headingView = {ele} />
//                 )}
//             </ul>