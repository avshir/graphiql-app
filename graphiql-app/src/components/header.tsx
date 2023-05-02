import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className={'nav-menu'}>
        <NavLink className={'nav-page'} to="/velcome">
          Velcome
        </NavLink>
        <NavLink className={'nav-page'} to="/main">
          Main
        </NavLink>
      </nav>
    </>
  );
}
