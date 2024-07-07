import { Component } from 'react';
import ErrorBoundary from '../entities/errorBoundary/errorBoundary';
import Header from '../widgets/header/header';
import PokemonSlider from '../entities/pokemon/pokemonList';

interface MainPageState {
  searchTerm: string;
}

class MainPage extends Component<{}, MainPageState> {
  state: MainPageState = {
    searchTerm: localStorage.getItem('searchTerm') || '',
  };

  handleSearchTermChange = (term: string) => {
    this.setState({ searchTerm: term });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    const trimmedTerm = searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedTerm);
    this.setState({ searchTerm: trimmedTerm });
  };

  handleThrowError = () => {
    throw new Error('Test error');
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <ErrorBoundary>
        <Header
          searchTerm={searchTerm}
          onSearchTermChange={this.handleSearchTermChange}
          onSearch={this.handleSearch}
          onThrowError={this.handleThrowError}
        />
        <PokemonSlider limit={12} searchTerm={searchTerm} />
      </ErrorBoundary>
    );
  }
}

export default MainPage;
