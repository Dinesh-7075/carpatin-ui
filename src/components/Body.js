import React from 'react'
import Welcome from './pageDataComponents/Welcome';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import LeftNavBar from './LeftNavBar';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Welcome />,
        },
        {
          path: "/welcome",
          element: <Welcome />,
        },
      ]);
      return (
        <div>
            <Header />
            <LeftNavBar />
          <RouterProvider router={appRouter} />
        </div>
      );
}

export default Body