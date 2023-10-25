import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../pages/Root";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";

import "./Normalize.css";
import "./BaseStyles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
