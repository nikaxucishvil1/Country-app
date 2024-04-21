import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Africa from "./pages/Africa.tsx";
import Antarctic from "./pages/Antarctic.tsx";
import Asia from "./pages/Asia.tsx";
import Europe from "./pages/Europe.tsx";
import Oceania from "./pages/Oceania.tsx";
import Americas from "./pages/Americas.tsx";
import Single from "./components/SingleCountry/Single.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Africa",
    element: <Africa />,
  },
  {
    path: "/Americas",
    element: <Americas />,
  },
  {
    path: "/Antarctic",
    element: <Antarctic />,
  },
  {
    path: "/Asia",
    element: <Asia />,
  },
  {
    path: "/Europe",
    element: <Europe />,
  },
  {
    path: "/Oceania",
    element: <Oceania />,
  },
  {
    path: "/Single",
    element: <Single />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
