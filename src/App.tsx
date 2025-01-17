import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./app/layout";
// import LoginPage from "./app/login/page";
// import DashboardPage from "./app/dashboard/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      // dashboard
      { path: "dashboard", element: <div>dashboard</div>, children: [{}] },
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
