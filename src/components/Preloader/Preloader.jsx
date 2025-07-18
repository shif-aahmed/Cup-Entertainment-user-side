import './Preloader.css';
import logo from '../../assets/pre-img.png';
import { useEffect, useState } from 'react';

const Preloader = ({ onFinish }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
  
    const animationStart = setTimeout(() => {
      setStartAnimation(true); 
    }, 1300); 

    const finish = setTimeout(() => {
      if (onFinish) onFinish(); 
    }, 1800); 

    return () => {
      clearTimeout(animationStart);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className={`preloader ${startAnimation ? 'hide' : ''}`}>
      <img
        src={logo}
        alt="Logo"
        height="100"
        className="d-inline-block align-top me-2"
      />
    </div>
  );
};

export default Preloader;
