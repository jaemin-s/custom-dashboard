import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./app/layout";
import DashboardLayout from "./app/dashboard/layout";
import DashboardOverview from "./app/dashboard/overview/page";
import PrivateRoute from "./app/private-route";
import { loader as OverviewLoader } from "./app/dashboard/overview/overview.loader";
// import LoginPage from "./app/login/page";
// import DashboardPage from "./app/dashboard/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    errorElement: <div>Error</div>,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      // dashboard
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardOverview />,
            loader: OverviewLoader,
          },
        ],
      },
      { path: "management", element: <div>management</div>, children: [{}] },
    ],
  },
  // auth ( login, signup )
  {
    path: "auth",
    element: <div />,
    children: [
      { index: true, element: <div /> },
      { path: "signup", element: <div /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
