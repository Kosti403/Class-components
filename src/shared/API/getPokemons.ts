import PokeApi from './baseUrl';
import { PokemonType } from '../types/pokemonTypes';

export const fetchPokemonList = async (
  limit: number,
  offset: number,
): Promise<PokemonType[]> => {
  const response = await PokeApi.get(
    `/pokemon?limit=${limit}&offset=${offset}`,
  );
  const pokemonUrls = response.data.results.map(
    (pokemon: { url: string }) => pokemon.url,
  );

  const pokemonData = await Promise.all(
    pokemonUrls.map(async (url: string) => {
      const pokemon = await PokeApi.get(url);
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        base_experience: pokemon.data.base_experience,
        height: pokemon.data.height,
        is_default: pokemon.data.is_default,
        order: pokemon.data.order,
        weight: pokemon.data.weight,
      };
    }),
  );

  return pokemonData;
};
