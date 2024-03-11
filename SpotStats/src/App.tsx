import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./components/Error/Error";
import { checkTokenValidity } from './utils/api';
import Loading from './components/Loading/Loading';

function App() {
  const [authStatus, setAuthStatus] = useState('pending');

  useEffect(() => {
    const verifyToken = async () => {
      const isValid = await checkTokenValidity();
      setAuthStatus(isValid ? 'authenticated' : 'unauthenticated');
    };
    verifyToken();
  }, []);

  if (authStatus === 'pending') {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-background-500 text-white-500">
        <Loading />
      </div>
    )
  }

  return (
    <div className="w-100 h-svh bg-background-500">
      <Routes>
        {authStatus === 'authenticated' && <Route path="/" element={<Home />} />}
        {authStatus === 'unauthenticated' && <Route path="*" element={<Login />} />}
        <Route path="/error" element={<ErrorPage />} />
        {authStatus === 'authenticated' && <Route path="*" element={<ErrorPage />} />}
      </Routes>
    </div>
  );
}

export default App;
