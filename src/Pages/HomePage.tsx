import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Store</h1>
      <div>
        <Link to='/products'>
          <button>View Products</button>
        </Link>
        <Link to='/cart'>
          <button>View Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
