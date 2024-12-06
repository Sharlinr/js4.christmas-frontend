import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className='app-header'>
      <nav className='nav-links'>
        <Link to='/'>Home</Link> | <Link to='/cart'>Cart</Link> |{' '}
        <Link to='/products'>Products</Link>
      </nav>
    </header>
  );
};

export default AppHeader;
