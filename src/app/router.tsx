// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarshipPage from "../pages/StarshipPage";
import NotFoundPage from "../widgets/ERORR/NotFoundPage";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarshipPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
