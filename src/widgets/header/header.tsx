import { Component } from 'react';
import pokeLogo from '../../assets/pokeapi.png';
import s from './header.module.css';

interface HeaderProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearch: () => void;
  onThrowError: () => void;
  loading: boolean;
}

class Header extends Component<HeaderProps> {
  render() {
    const { searchTerm, onSearchTermChange, onSearch, onThrowError, loading } =
      this.props;

    return (
      <header className={s.header}>
        <div className={s.logo}>
          <img src={pokeLogo} alt="PokeLogo" />
        </div>
        <div className={s.search}>
          <input
            type="text"
            value={searchTerm}
            onChange={e => onSearchTermChange(e.target.value)}
            placeholder="Enter the text..."
          />
          <button onClick={onSearch}>Search</button>
        </div>
        {loading && <div className={s.loader}>LOADING...</div>}
        <button onClick={onThrowError}>Cause an Error</button>
      </header>
    );
  }
}

export default Header;
