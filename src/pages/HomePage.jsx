import { useState } from 'react';
import NavBar from '../components/navbar/NavBar.jsx';
import CarouselBanner from '../components/CarouselBanner/CarouselBanner.jsx';
import MovieGrid from '../components/moviegrid/MovieGrid.jsx';
import About from '../components/about/AboutComp.jsx';
import RegistrationModal from '../components/RegistrationModal/RegistrationModal.jsx';
import Footer from '../components/footer/Footer.jsx';
import Ott from '../components/ottheighlight/ott.jsx';
import Catagories from '../components/Categories/CategoriesSection.jsx';
import StartFreeTrial from '../components/StartFreeTrial/StartFreeTrial.jsx';
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      <CarouselBanner />
      <MovieGrid />
      <About />
      <Ott />
      <Catagories />
      <StartFreeTrial />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HomePage;
