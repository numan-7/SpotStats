import{ useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { checkTokenValidity } from './utils/api';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const isValid = await checkTokenValidity();
      if (isValid) {
        navigate('/');
      } else {
        navigate('/login');
      }
    };

    verifyToken();
  }, [navigate]);

  return (
    <div className="w-100 h-svh bg-background-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
