import logo from './../images/header/logo.svg';
// import './App.css';

function Header() {
  return (
    <header  className="header">
        <img src={logo} className="header__logo" alt="Лого Место" />
    </header>
  );
}

export default Header;