import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className='homepage-wrapper'>
      <nav className='nav-links'>
        <Link to='/'>Home</Link> | <Link to='/cart'>Cart</Link> |
        <Link to='/products'>Products</Link>
      </nav>
      <h1>Welcome to JulICA</h1>
      <h3>Everyones christmas store</h3>
      <div>
        <button>View Products</button>
        <button>View Cart</button>
      </div>
    </div>
  );
};

export default HomePage;
