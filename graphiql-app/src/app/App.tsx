import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ErrorPage from '../routes/error-page';
import WelcomePage from '../routes/welcome-page';
import MainPage from '../routes/main-page';
import LoginPage from '../routes/login-page';
import RegisterPage from '../routes/register-page';
import Layout from '../features/layout';
import { useEffect, useState } from 'react';

export default function App() {
  const location = useLocation();

  const [isLogget, setLogget] = useState(true);
  const [page, setPage] = useState('');

  useEffect(() => {
    const isAuthLS = localStorage.getItem('userIsAuth');
    const currentPage = localStorage.getItem('page') as string;

    setPage(currentPage);
    setLogget(!!isAuthLS);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route
          path="welcome"
          element={page === 'main' ? <Navigate to="/main" /> : <WelcomePage />}
        />
        <Route path="main" element={isLogget ? <MainPage /> : <Navigate to="/welcome" />} />
        <Route path="login" element={isLogget ? <Navigate to="/main" /> : <LoginPage />} />
        <Route path="register" element={isLogget ? <Navigate to="/main" /> : <RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
