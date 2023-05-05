import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from '../routes/error-page';
import VelcomePage from '../routes/velcome-page';
import MainPage from '../routes/main-page';
import Header from '../components/header';
import Footer from '../components/footer';

export default function App() {
  return (
    <div>
      <Header />
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
