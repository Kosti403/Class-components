import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import StarshipPage from "../pages/StarshipPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarshipPage />
  </React.StrictMode>
);
