import { useEffect, useState } from 'react';
import { fetchStarship } from '../api/starship';
import { Starship } from '../types/StarshipType';

const useStarships = (currentPage: number) => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const loadStarships = async (page: number) => {
      try {
        const response = await fetchStarship(page);
        setStarships(response.results);
        setTotalPages(Math.ceil(response.count / 10));
      } catch (error) {
        console.error('Error loading starships:', error);
      }
    };

    loadStarships(currentPage);
  }, [currentPage]);

  return { starships, totalPages };
};

export default useStarships;
