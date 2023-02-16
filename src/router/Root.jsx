import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Surah from "../pages/Surah";
import Readers from "../pages/Reciters";
import RecitersSurah from "../pages/RecitersSurah";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "surah/:id",
        element: <Surah />,
      },
      {
        path: "reciters",
        element: <Readers />,
      },
      {
        path: "reciters/:id",
        element: <RecitersSurah />,
      },
    ],
  },
]);
