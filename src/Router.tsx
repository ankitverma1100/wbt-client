import React, { Suspense, lazy } from "react";
import type { JSX, ReactElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./Common/PageLayout/PageLayout";
import Loder from "./Common/Loder";
import LedgerDetails from "./Pages/LedgerDetails/LedgerDetails";

/* ===============================
   LAZY IMPORTS
================================ */
const Login_New = lazy(() => import("./Pages/Login/Login_New"));
const PendingBet = lazy(() => import("./Pages/PendingBet/PendingBet"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Inplay = lazy(() => import("./Pages/Inplay/Inplay"));
const CasinoHome = lazy(() => import("./Pages/Casino/CasinoHome"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Statement = lazy(() => import("./Pages/Statement/Statement"));
const Ledger = lazy(() => import("./Pages/Ledger/Ledger"));
const Changepassword = lazy(
  () => import("./Pages/Changepassword/Changepassword")
);
const Rule = lazy(() => import("./Pages/Rule/Rule"));
const GameDetails = lazy(() => import("./Pages/GameDetails/GameDetails"));
const Freegames = lazy(() => import("./Pages/Freegames/Freegames"));
const CasinoMainPage = lazy(
  () => import("./Pages/CasinoDetails/CasinoMainPage")
);

/* ===============================
   MATKA PAGES (ADDED)
================================ */
const Matka = lazy(() => import("./Pages/Matka/matka"));
const MatkaDetails = lazy(
  () => import("./Pages/MatkaDetails/MatkaDetails")
);

/* ===============================
   SUSPENSE WRAPPER
================================ */
const withLoader = (
  Component: React.LazyExoticComponent<() => JSX.Element>
): ReactElement => (
  <Suspense fallback={<Loder />}>
    <Component />
  </Suspense>
);

/* ===============================
   ROUTER CONFIG
================================ */
export const router = createBrowserRouter([
  {
    path: "/login",
    element: withLoader(Login_New),
  },
  {
    path: "/",
    element: withLoader(Login_New),
  },
  {
    path: "/main",
    element: <PageLayout />,
    children: [
      {
        path: "dashboard",
        element: withLoader(Dashboard),
      },
      {
        path: "matches",
        element: withLoader(Inplay),
      },
      {
        path: "pending",
        element: withLoader(PendingBet),
      },
      {
        path: "casino",
        element: withLoader(CasinoHome),
      },

      /* ===============================
         ✅ MATKA ROUTES (FIXED)
      ================================ */
      {
        path: "matka",
        element: withLoader(Matka),
      },
      {
        path: "matka-details/:matkaId",
        element: withLoader(MatkaDetails),
      },

      {
        path: "profile",
        element: withLoader(Profile),
      },
      {
        path: "statement",
        element: withLoader(Statement),
      },
      {
        path: "ledger",
        element: withLoader(Ledger),
      },
      {
        path: "changepassword",
        element: withLoader(Changepassword),
      },
      {
        path: "rules",
        element: withLoader(Rule),
      },
      {
        path: "match-deatils/:id/:sportId?",
        element: withLoader(GameDetails),
      },
      {
        path: "freegames",
        element: withLoader(Freegames),
      },
      {
        path: "ledgerDetails/:id",
        element: <LedgerDetails />,
      },
      {
        path: "casino/:id",
        element: <CasinoMainPage />,
      },
    ],
  },
  {
    path: "*",
    element: withLoader(Login_New),
  },
]);
