import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
// import LoginPage from "./app/login/page";
// import DashboardPage from "./app/dashboard/page";

const router = createBrowserRouter([
  // { path: "/", element: <LoginPage /> },
  // { path: "/dashboard", element: <DashboardPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
