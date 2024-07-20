import Dashboard from "./pages/Dashboard";
import DashboardNotifactions from "./pages/DashboardNotifactions";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardTables from "./pages/DashboardTables";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/dashboard/profile",
      element: <DashboardProfile />,
    },
    {
      path: "/dashboard/tables",
      element: <DashboardTables />,
    },
    {
      path: "/dashboard/notifactions",
      element: <DashboardNotifactions />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

