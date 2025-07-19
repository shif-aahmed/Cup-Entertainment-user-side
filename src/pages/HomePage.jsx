import { useState } from 'react';
import NavBar from '../components/NavBar/NavBar.jsx';
import CarouselBanner from '../components/CarouselBanner/CarouselBanner.jsx';
import MainGrid from '../components/MainGrid/MainGrid.jsx';
import About from '../components/About/About.jsx';
import RegistrationModal from '../components/RegistrationModal/RegistrationModal.jsx';
import HomeFooter from '../components/HomeFooter/HomeFooter.jsx';
import OttHighlight from '../components/OttHighlight/OttHighlight.jsx';
import Catagories from '../components/Categories/CategoriesSection.jsx';
import StartFreeTrial from '../components/StartFreeTrial/StartFreeTrial.jsx';
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      <CarouselBanner />
      <MainGrid />
      <About />
      <OttHighlight />
      <Catagories />
      <StartFreeTrial />
      <HomeFooter />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HomePage;
