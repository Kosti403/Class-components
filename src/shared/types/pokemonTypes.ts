export interface PokemonType {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

export interface PokemonSliderProps {
  limit: number;
  searchTerm: string;
}

export interface PokemonSliderState {
  pokemonList: PokemonType[];
  currentPage: number;
  totalPokemon: number;
}
