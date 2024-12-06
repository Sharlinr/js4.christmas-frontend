import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className='homepage-wrapper'>
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
