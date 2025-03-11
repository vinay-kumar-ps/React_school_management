import Account from "./views/Account";
import Library from "./views/Library";
import Staff from "./views/Staff";
import Student from "./views/Student";
import Dashboard from "./views/Dashboard";

import {
    createBrowserRouter
  } from "react-router-dom";
  
  const router = createBrowserRouter([
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
  export default router;