import LogoImage from './LogoImage';

const NavbarMenu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <LogoImage />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/budtender">Budtender</a>
        </li>
        <li>
          <a href="/stash">Stash</a>
        </li>
        <li>
          <a href="/sessions">Sessions</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
