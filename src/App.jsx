import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import MovieHome from './pages/MovieHomePage/MovieHomePage.jsx';
import HomePage from "./pages/HomePage.jsx";
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy.jsx';
import Preloader from './components/PreLoader/PreLoader.jsx'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="bg-[#121212] text-[#EEEEEE] font-inter min-h-screen">
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/userhomePage" element={<MovieHome />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
