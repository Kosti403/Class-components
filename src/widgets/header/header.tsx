import pokeLogo from '../../assets/pokeapi.png';
import s from './header.module.css';

export default function Header() {
  return (
    <header>
      <div className={s.logo}>
        <img src={pokeLogo} alt="pokeLogo" />
      </div>
      <div className={s.search}>
        <input type="text" placeholder="Введите текст..." />
        <button>Отправить</button>
      </div>
    </header>
  );
}
