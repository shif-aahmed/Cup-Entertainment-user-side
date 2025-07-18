import React, { useEffect, useRef, useState } from 'react';
import './Grid.css';

// Import all images
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import img7 from '../../assets/images/img7.jpg';
import img8 from '../../assets/images/img8.jpg';
import img9 from '../../assets/images/img9.jpg';
import img10 from '../../assets/images/img10.jpg';
import img11 from '../../assets/images/img11.jpg';
import img12 from '../../assets/images/img12.jpg';
import img13 from '../../assets/images/img13.jpg';
import img14 from '../../assets/images/img14.jpg';
import img15 from '../../assets/images/img15.jpg';
import img16 from '../../assets/images/img16.jpg';
import img17 from '../../assets/images/img17.jpg';
import img18 from '../../assets/images/img18.jpg';
import img19 from '../../assets/images/img19.jpg';
import img20 from '../../assets/images/img20.jpg';
import img21 from '../../assets/images/img21.jpg';
import img22 from '../../assets/images/img22.jpg';
import img23 from '../../assets/images/img23.jpg';
import img24 from '../../assets/images/img24.jpg';
import img25 from '../../assets/images/img25.jpg';
import img26 from '../../assets/images/img26.jpg';
import img27 from '../../assets/images/img27.jpg';
import img28 from '../../assets/images/img28.jpg';
import img29 from '../../assets/images/img29.jpg';
import img30 from '../../assets/images/img30.jpg';

// Only id and image — but group them for now using local logic
const allImageData = [
  { id: 1, image: img1, category: 'Categories' },
  { id: 2, image: img2, category: 'Categories' },
  { id: 3, image: img3, category: 'Categories' },
  { id: 4, image: img4, category: 'Categories' },
  { id: 5, image: img5, category: 'Categories' },
  { id: 6, image: img6, category: 'Categories' },
  { id: 7, image: img7, category: 'Categories' },
  { id: 8, image: img8, category: 'Categories' },

  { id: 9, image: img9, category: 'Trending' },
  { id: 10, image: img10, category: 'Trending' },
  { id: 11, image: img11, category: 'Trending' },
  { id: 12, image: img12, category: 'Trending' },
  { id: 13, image: img13, category: 'Trending' },
  { id: 14, image: img14, category: 'Trending' },
  { id: 15, image: img15, category: 'Trending' },
  { id: 16, image: img16, category: 'Trending' },

  { id: 17, image: img17, category: 'Top' },
  { id: 18, image: img18, category: 'Top' },
  { id: 19, image: img19, category: 'Top' },
  { id: 20, image: img20, category: 'Top' },
  { id: 21, image: img21, category: 'Top' },
  { id: 22, image: img22, category: 'Top' },
  { id: 23, image: img23, category: 'Top' },
  { id: 24, image: img24, category: 'Top' },

  { id: 25, image: img25, category: 'New Releases' },
  { id: 26, image: img26, category: 'New Releases' },
  { id: 27, image: img27, category: 'New Releases' },
  { id: 28, image: img28, category: 'New Releases' },
  { id: 29, image: img29, category: 'New Releases' },
  { id: 30, image: img30, category: 'New Releases' },
];

const MovieSection = ({ category, images }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = scrollRef.current.offsetWidth * 0.9;
    scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  };

  return (
    <section className="movie-section">
      <div className="category-header">
        <p className="category-label">{category}</p>
        <div className="scroll-buttons">
          <button onClick={() => scroll('left')}>&#8249;</button>
          <button onClick={() => scroll('right')}>&#8250;</button>
        </div>
      </div>
      <div className="movie-grid" ref={scrollRef}>
        {images.map((img) => (
          <div className="movie-item" key={img.id}>
            <img
              src={img.image}
              alt={`Movie ${img.id}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/300x300/333333/FFFFFF?text=No+Image';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const Grid = () => {
  const [categoryImages, setCategoryImages] = useState([]);
  const [trendingImages, setTrendingImages] = useState([]);
  const [topImages, setTopImages] = useState([]);
  const [newReleasesImages, setNewReleasesImages] = useState([]);

  useEffect(() => {
    // Simulate filtered results
    setCategoryImages(allImageData.filter((img) => img.category === 'Categories'));
    setTrendingImages(allImageData.filter((img) => img.category === 'Trending'));
    setTopImages(allImageData.filter((img) => img.category === 'Top'));
    setNewReleasesImages(allImageData.filter((img) => img.category === 'New Releases'));
  }, []);

  return (
    <div className="movie-container">
      <MovieSection category="Categories" images={categoryImages} />
      <MovieSection category="Trending" images={trendingImages} />
      <MovieSection category="Top 10 in Last Month" images={topImages} />
      <MovieSection category="New Releases" images={newReleasesImages} />
    </div>
  );
};

export default Grid;
