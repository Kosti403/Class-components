import { Starship, StarshipDetail } from "../types/StarshipType";

export const fetchStarship = async (page: number): Promise<{ results: Starship[]; count: number }> => {
  try {
    const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch starships');
    }
    const data = await response.json();
    return {
      results: data.results as Starship[],
      count: data.count
    };
  } catch (error) {
    throw new Error(`Error fetching starships: ${error}`);
  }
};


export const fetchStarshipDetail = async (id: number): Promise<StarshipDetail> => {
  try {
    const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch starship details');
    }
    const data = await response.json();
    return data as StarshipDetail;
  } catch (error) {
    throw new Error(`Error fetching starship details: ${error}`);
  }
};
