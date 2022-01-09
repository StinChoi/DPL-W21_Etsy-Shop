import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Protected from './pages/Protected';
import Public from './pages/Public';
import Register from './pages/Register';
import ProductsFromSeller from './pages/ProductsFromSeller';
import Category from './pages/Category';
import FindProduct from './pages/FindProduct';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/public" element={<Public />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route exact path="/product" element={<ProductsFromSeller />} />
        <Route exact path="/category" element={<Category />} />
        <Route path="/find" element={<FindProduct/>} /> 
        <Route element={<RequireAuth />}>
          {/* Protected Routes */}
          <Route path="/protected" element={<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
