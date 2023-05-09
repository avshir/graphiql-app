import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from '../routes/error-page';
import VelcomePage from '../routes/velcome-page';
import MainPage from '../routes/main-page';
import Header from '../components/header/index';
import Footer from '../components/footer';

import { useScroll } from 'framer-motion';

export default function App() {
  const { scrollY } = useScroll();
  const offsetY = [0, 500];

  return (
    <div>
      <Header scrollY={scrollY} offsetY={offsetY} />
      <Routes>
        <Route path="/" element={<Navigate to="/velcome" />} />
        <Route path="velcome" element={<VelcomePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
