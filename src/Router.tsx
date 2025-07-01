import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import PageLayout from "./Common/PageLayout/PageLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Inplay from "./Pages/Inplay/Inplay";
import CasinoHome from "./Pages/Casino/CasinoHome";
import Profile from "./Pages/Profile/Profile";
import Statement from "./Pages/Statement/Statement";
import Ledger from "./Pages/Ledger/Ledger";
import Changepassword from "./Pages/Changepassword/Changepassword";
import Rule from "./Pages/Rule/Rule";
import GameDetails from "./Pages/GameDetails/GameDetails";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: <PageLayout />,
    children: [
      {
        path: "matches",
        element: <Inplay />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "casino",
        element: <CasinoHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "statement",
        element: <Statement />,
      },
      {
        path: "ledger",
        element: <Ledger />,
      },
      {
        path: "changepassword",
        element: <Changepassword />,
      },
      {
        path: "rules",
        element: <Rule />,
      },
      {
        path: "match-deatils/:id/:sportId?",
        element: <GameDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <Login />, // Optional: use a proper 404 page here
  },
]);
