import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StarshipPage from '../pages/StarshipPage';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StarshipPage />} />
      <Route path="/starships" element={<StarshipPage />} />
      <Route path="/starships/:page" element={<StarshipPage />} />
    </Routes>
  );
};

export default AppRoutes;
