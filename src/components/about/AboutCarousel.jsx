import React, { useState } from 'react';
import styled from 'styled-components';
import { IMAGE_HEIGHT, MAX_WIDTH, MIN_WIDTH, sampleImages } from '../../customValues/pubVariables';
import PictureInform from './PictureInform';
import SlideButtonSet from './SlideButtonSet';
import CarouselModule from './CarouselModule';

function AboutCarousel({images}) {

    const [count,setCount] = useState(1);

    return (
        <CarouselBody>
            <SlideButtonSet count={count} setFunc={setCount} total={images.length}/>
            <CarouselModule images={images} viewedShot={count} imageSize={false}/>
            <PictureInform count={count} total={images.length}/>
        </CarouselBody>
    );
}

export default AboutCarousel;

const CarouselBody = styled.div`
    position: relative;
    height: ${IMAGE_HEIGHT};
    width: ${MAX_WIDTH};
    min-width: ${MIN_WIDTH};
    overflow: hidden;
`