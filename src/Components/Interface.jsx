import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from '../ControlPanel/Dashboard';
import Statistics from '../ControlPanel/Statistics';
import Support from '../ControlPanel/Support';
import Inbox from '../ControlPanel/Inbox';
import Goals from '../ControlPanel/Goals';
import Layout from '../ControlPanel/Layout';
import Notification from '../ControlPanel/Notification';


function Interface() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:
      [
        {path: "/", element: <Dashboard />},
        {path: "/statistics", element: <Statistics/> },
        {path: "/support", element: <Support/> },
        {path: "/inbox", element: <Inbox/> },
        {path: "/goals", element: <Goals/> },
        {path: "/notification", element: <Notification/> }
      ],
      
    },
]);

  return  <RouterProvider router={router} />;
}

export default Interface
