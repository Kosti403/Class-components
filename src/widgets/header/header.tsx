import  { Component } from 'react';
import pokeLogo from '../../assets/pokeapi.png';
import s from './header.module.css';

interface HeaderProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearch: () => void;
  onThrowError: () => void;
}

class Header extends Component<HeaderProps> {
  render() {
    const { searchTerm, onSearchTermChange, onSearch, onThrowError } = this.props;

    return (
      <header className={s.header}>
        <div className={s.logo}>
          <img src={pokeLogo} alt="PokeLogo" />
        </div>
        <div className={s.search}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            placeholder="Enter text..."
          />
          <button onClick={onSearch}>Search</button>
        </div>
        <button onClick={onThrowError}>Throw Error</button>
      </header>
    );
  }
}

export default Header;
