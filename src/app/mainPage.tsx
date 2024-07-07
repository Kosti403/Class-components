import Header from '../widgets/header/header';
import PokemonSlider from '../pages/pokemonList';

export default function MainPage() {
  return (
    <>
      <Header />
      <PokemonSlider limit={10} />
    </>
  );
}
