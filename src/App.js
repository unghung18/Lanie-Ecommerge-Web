import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import Product from './pages/Product/Product';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
