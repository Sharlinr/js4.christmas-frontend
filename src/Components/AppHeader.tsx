import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className='app-header'>
      <nav className='nav-links'>
        <Link to='/'>JulICA</Link> | <Link to='/products'>Produkter</Link>|
        <Link to='/cart'>Varukorg</Link>
      </nav>
    </header>
  );
};

export default AppHeader;
