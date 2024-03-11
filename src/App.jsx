import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../src/pages/Home/Home'));
const ShoppingCart = lazy(() => import('./pages/ShoppingCart/ShoppingCart'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          {/* <Route path="history" element={<FavoriteCar />} /> */}

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
