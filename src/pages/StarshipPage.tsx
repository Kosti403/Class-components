import React, { useState } from "react";
import useStarships from "../shared/HOC/useStarships";
import StarshipList from "../widgets/starshipList/starshipList";
import Pagination from "../features/pagination/pagination";

const StarshipPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { starships, totalPages } = useStarships(currentPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h1>Starships</h1>
      <StarshipList starships={starships} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default StarshipPage;
