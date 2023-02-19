import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Surah from "../pages/quran/Surah";
import Readers from "../pages/reciters/Reciters";
import ReadHadith from "../pages/hadith/ReadHadith";
import HadithList from "../pages/hadith/HadithList";
import SelectedList from "../pages/hadith/SelectedList";
import RecitersSurah from "../pages/reciters/RecitersSurah";

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
      {
        path: "hadithList",
        element: <HadithList />,
        children: [
          // { path: ":id", element: <SelectedList /> }, Not Work !!!
        ],
      },
      {
        path: "hadithList/:listId",
        element: <SelectedList />,
      },
      {
        path: "hadithList/:listId/:hadithId",
        element: <ReadHadith />,
      },
    ],
  },
]);
