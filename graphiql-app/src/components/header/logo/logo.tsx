import { Link } from 'react-router-dom';
import './logo-style.scss';

export default function Logo() {
  return (
    <Link className="header-logo" to="/welcome">
      countries API
    </Link>
  );
}
