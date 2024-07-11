import { Component } from 'react';
import { fetchPokemonList } from '../../shared/API/getPokemons';
import s from './pokemonList.module.css';
import { PokemonType } from '../../shared/types/pokemonTypes';

interface PokemonSliderProps {
  limit: number;
  searchTerm: string;
}

interface PokemonSliderState {
  pokemonList: PokemonType[];
  currentPage: number;
  totalPokemon: number;
  loading: boolean;
}

class PokemonSlider extends Component<PokemonSliderProps, PokemonSliderState> {
  state: PokemonSliderState = {
    pokemonList: [],
    currentPage: 1,
    totalPokemon: 36,
    loading: false,
  };

  async componentDidMount() {
    await this.loadPokemon();
  }

  async componentDidUpdate(prevProps: PokemonSliderProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      await this.loadPokemon();
    }
  }

  async loadPokemon() {
    const { limit, searchTerm } = this.props;
    const { currentPage } = this.state;
    const offset = (currentPage - 1) * limit;

    this.setState({ loading: true });

    try {
      const pokemonList = await fetchPokemonList(limit, offset, searchTerm);
      this.setState({ pokemonList, loading: false });
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
      this.setState({ loading: false });
    }
  }

  handlePageChange = async (page: number) => {
    this.setState({ currentPage: page }, this.loadPokemon);
  };

  render() {
    const { pokemonList, totalPokemon, currentPage, loading } = this.state;
    const { limit } = this.props;

    const totalPages = Math.ceil(totalPokemon / limit);

    return (
      <div className={s.pokemonSlider}>
        <h1>List Pokemon</h1>
        {loading ? (
          <div className={s.loader}>LOADING.....</div>
        ) : (
          <div className={s.slides}>
            {pokemonList.map((pokemon: PokemonType) => (
              <div key={pokemon.id} className={s.slide}>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <div className={s.pokemonImage}>
                  <img
                    src={pokemon.sprites?.front_default}
                    alt="Pokemon sprite"
                  />
                </div>
                <div className={s.infoPokemon}>
                  <h4>Base Experience: {pokemon.base_experience}</h4>
                  <h4>Height: {pokemon.height}</h4>
                  <h4>Weight: {pokemon.weight}</h4>
                  <h4>Order: {pokemon.order}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
        {totalPages > 1 && (
          <div className={s.pagination}>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              page => (
                <button
                  key={page}
                  onClick={() => this.handlePageChange(page)}
                  disabled={page === currentPage}
                >
                  {page}
                </button>
              ),
            )}
          </div>
        )}
      </div>
    );
  }
}

export default PokemonSlider;
