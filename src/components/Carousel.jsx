import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import banners from '../source/banners';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  console.log(banners.banners.length);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        setCurrentSlide(currentSlide === banners.banners.length - 1 ? 0 : currentSlide + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, currentSlide, banners.banners.length]);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? banners.banners.length - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === banners.banners.length - 1 ? 0 : currentSlide + 1);
  };

  const handleDotClick = index => {
    setCurrentSlide(index);
  };

  return (
    <>
    <SliderWrapper >
      {/* <SliderContainer style={{ transform: `translateX(-${currentSlide * 100}%)` }}> */}
      {banners.banners.map((index) => (
        <Slide key={index} src={`/imgs/banners/${index+1}.png`} active={index === currentSlide} />
      ))}
      {/* </SliderContainer> */}
      <ButtonWrapper direction="left">
        <Button onClick={handlePrevClick}>{'<'}</Button>
      </ButtonWrapper>
      <ButtonWrapper direction="right">
        <Button onClick={handleNextClick}>{'>'}</Button>
      </ButtonWrapper>      
    </SliderWrapper>
    <PaginationWrapper>
        {banners.banners.map((image, index) => (
          <PaginationDot
            key={index}
            active={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </PaginationWrapper>
    <Button onClick={() => setAutoplay(!autoplay)}>
      {autoplay ? 'Pause' : 'Play'}
    </Button>
    </>
  );
};

export default Carousel;

const SliderWrapper = styled.div`
  position: relative;
  width: 48.5rem;
  height: 10rem;
  margin: auto;
`;

const Slide = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const SliderContainer = styled.div`
  
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PaginationDot = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  margin: 0 0.25rem;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#333' : '#ccc')};
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => (props.direction === 'right' ? 'right: 0' : 'left: 0')};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  margin: 0.5rem;
  border: 2px solid #333;
`;