import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorPage from '../routes/error-page';
import WelcomePage from '../routes/welcome-page';
import MainPage from '../routes/main-page';
import LoginPage from '../routes/login-page';
import RegisterPage from '../routes/register-page';
import Layout from '../features/layout';
import { useAppSelector } from '../utils/hooks';

export default function App() {
  const isAuthLS: string = localStorage.getItem('userIsAuth') || '';
  const IsAuthUser = useAppSelector((state) => state.user.email);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isAuthLS ? (
          <Route index element={<Navigate to="/main" />} />
        ) : (
          <Route index element={<Navigate to="/welcome" />} />
        )}

        {isAuthLS || IsAuthUser ? (
          <Route path="main" element={<MainPage />} />
        ) : (
          <Route path="main" element={<Navigate to="/welcome" />} />
        )}

        <Route path="welcome" element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
