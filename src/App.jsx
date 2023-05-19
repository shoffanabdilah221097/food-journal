import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import DashboardFood from "./pages/DashboardFood";

const isLogin = localStorage.getItem("token");
const router = createBrowserRouter([
  {
    path: "/",
    element: isLogin ? <Home /> : <Login />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/dashboardfood",
    element: <DashboardFood />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
