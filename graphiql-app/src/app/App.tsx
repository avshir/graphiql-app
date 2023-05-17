import { Navigate, Route, Routes } from 'react-router-dom';
import { useScroll } from 'framer-motion';

import ErrorPage from '../routes/error-page';
import WelcomePage from '../routes/welcome-page';
import MainPage from '../routes/main-page';
import Header from '../components/header';
import Footer from '../components/footer';
import LoginPage from '../routes/login-page';
import RegisterPage from '../routes/register-page';
import { OFFSET_Y_SCROLL } from '../utils/animation-data';

export default function App() {
  const { scrollY } = useScroll();
  const offsetY = OFFSET_Y_SCROLL;

  return (
    <div className="wrapper">
      <Header scrollY={scrollY} offsetY={offsetY} />
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
