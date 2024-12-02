import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import AppHeader from './Components/AppHeader';

const App = () => {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
