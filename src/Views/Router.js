import {
    createBrowserRouter
  } from "react-router-dom";
  
  const Router = createBrowserRouter([
    {
        path: "/",
        element:< Dashboard />,
    },
    {
        path: "/student",
        element: <Student />,
    },
    {
        path: "/library",
        element: <Library />,
    },
    {
        path: "/staff",
        element: <Staff />,
    },
    {
        path: "/account",
        element: <Account />,
    },
  ]);
  export default Router;