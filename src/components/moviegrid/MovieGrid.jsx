import React, { useEffect, useState } from 'react';
import './MovieGrid.css';

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

const allImages = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
  { id: 11, image: img11 },
  { id: 12, image: img12 },
  { id: 13, image: img13 },
  { id: 14, image: img14 },
  { id: 15, image: img15 },
  { id: 16, image: img16 },
  { id: 17, image: img17 },
  { id: 18, image: img18 },
  { id: 19, image: img19 },
  { id: 20, image: img20 },
  { id: 21, image: img21 },
  { id: 22, image: img22 },
  { id: 23, image: img23 },
  { id: 24, image: img24 },
  { id: 25, image: img25 },
  { id: 26, image: img26 },
  { id: 27, image: img27 },
  { id: 28, image: img28 },
  { id: 29, image: img29 },
  { id: 30, image: img30 },
];

const loadImages = (start, count) => {
  return allImages.slice(start - 1, start - 1 + count).map((img) => ({
    id: img.id,
    src: img.image,
    alt: `Movie Poster ${img.id}`,
    fallback: 'https://placehold.co/300x300/333333/FFFFFF?text=No+Image',
  }));
};

const MovieSection = ({ title, images, isSquare = false }) => (
  <section>
    <h2 className="section-title">{title}</h2>
    <div className="movie-grid">
      {images.map((img) => (
        <div
          className={`movie-item ${isSquare ? 'square-container' : ''}`}
          key={img.id}
        >
          <img
            src={img.src}
            alt={img.alt}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = img.fallback;
            }}
          />
        </div>
      ))}
    </div>
  </section>
);

const MovieGrid = () => {
  const [trending, setTrending] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [liveTV, setLiveTV] = useState([]);

  useEffect(() => {
    setTrending(loadImages(1, 12));
    setNewReleases(loadImages(13, 10));
    setLiveTV(loadImages(25, 6));
  }, []);

  return (
    <div className="movie-container">
      <MovieSection title="Trending Now" images={trending} />
      <MovieSection title="New Releases" images={newReleases} />
      <MovieSection title="Live TV" images={liveTV} isSquare />
    </div>
  );
};

export default MovieGrid;
