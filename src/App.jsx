import Navigation from "./components/Navigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/service",
    element: <Service></Service>,
  },
  {
    path: "/menu",
    element: <Menu></Menu>,
  },
  {
    path: "/gallery",
    element: <Gallery></Gallery>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
