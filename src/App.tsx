import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.scss";
import "./style.scss";
import "./bootstrap.scss";
import "./bootstrap4.scss";
import { router } from "./Router";
import { useEffect } from "react";
import { isAntPro, themeName } from "./Pages/CasinoDetails/Constant";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeName);
    if (isAntPro) {
      document.title = `ANTPPRO`;
    } else {
      document.title = "NSGPRO99"; // fallback
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
