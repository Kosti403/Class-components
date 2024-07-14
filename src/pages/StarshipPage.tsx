import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './filmPage.module.scss';
import { Starship } from '../shared/types/StarshipType';
import { getStarshipsByPage } from '../shared/api/starship';

const StarshipPage = () => {
  const { page }: { page: string } = useParams();
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        setLoading(true);
        const response = await getStarshipsByPage(parseInt(page));
        setStarships(response.results);
      } catch (error) {
        console.error('Failed to fetch starships:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <h1>Starships</h1>
      <div className={s.starshipList}>
        {starships.map((starship) => (
          <div key={starship.name} className={s.starshipCard}>
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
          </div>
        ))}
      </div>
      <div className={s.pagination}>
        {page && parseInt(page) > 1 && (
          <Link to={`/starships/${parseInt(page) - 1}`}>Previous</Link>
        )}
        {starships.length === 10 && (
          <Link to={`/starships/${parseInt(page) + 1}`}>Next</Link>
        )}
      </div>
    </div>
  );
};

export default StarshipPage;
