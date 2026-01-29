import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/spaces">Spaces</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;
