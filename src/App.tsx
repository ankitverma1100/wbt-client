import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.scss";
import "./style.scss";
import "./bootstrap.scss";
import "./bootstrap4.scss";
import { router } from "./Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
