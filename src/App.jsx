import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserHome from './pages/UserHomePage/UserHomePage.jsx';
import HomePage from "./pages/HomePage.jsx";
import About from './pages/About/About.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy.jsx';
import Preloader from './components/Preloader/Preloader.jsx'; 

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
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/userhomePage" element={<UserHome />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
