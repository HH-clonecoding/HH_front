import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import banners from '../../source/banners';


function AutoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const fBanners = {banners};
  const interval = 5000;

  console.log("f", fBanners);

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.banners.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isPlaying, interval, banners.banners.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const renderPagination = () => (
    <div style={{ textAlign: 'center' }}>
      {banners.map((_, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: index === currentIndex ? 'black' : 'gray',
            margin: '0 5px',
            cursor: 'pointer',
          }}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );

  return (
    <MainCont>
        <div style={{ position: 'relative' }}>
      {banners.map((item) => (
        <img src={`/imgs/banners/${item.index}.png`} alt="" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: item.index === currentIndex ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          maxWidth: '100%',
        }}/>
      ))}
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      {renderPagination()}
    </div>
    </MainCont>
  )
}

export default AutoBanner

const MainCont = styled.div`
  border: 1px solid black;
  display: flex;
  margin: auto;
  max-width: 48.5rem;
  height: 100%;
  background-color: white;
  overflow: cover;
`

// const CSWrapper = styled.div`
//   height: 10rem;
// `