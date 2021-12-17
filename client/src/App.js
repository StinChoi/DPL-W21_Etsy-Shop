import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Protected from './pages/Protected';
import Public from './pages/Public';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          {/* Protected Routes */}
          <Route path="/protected" element={<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
