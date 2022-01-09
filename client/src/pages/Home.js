import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Home = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(auth)}
      <br />
      <button onClick={auth.handleLogin}>Login</button>
      <br />
      <button onClick={auth.handleLogout}>Logout</button>
      <br />
      <button onClick={() => navigate("/public")}>Public Page</button>
      <br />
      <Link to='/protected'>Protected</Link>
    </div>
  );
};

export default Home;