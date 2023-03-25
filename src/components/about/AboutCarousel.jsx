import React from 'react';
import styled from 'styled-components';
import { IMAGE_HEIGHT, MAX_WIDTH, MIN_WIDTH, sampleImages } from '../../customValues/pubVariables';
import { HFlex } from '../../customValues/styleStore';
import DetailImage from './AboutImage';
import PictureInform from './PictureInform';
import SlideButtonSet from './SlideButtonSet';
import uuid from 'react-uuid';


function DetailCarousel() {

    return (
        <CarouselBody>
            <SlideButtonSet />
            <HFlex etc='width:fit-content;'>
                {sampleImages.map((element) => <DetailImage key={uuid()}>{element}</DetailImage>)}
            </HFlex>
            <PictureInform count={sampleImages.length}/>
        </CarouselBody>
    );
}

export default DetailCarousel;

const CarouselBody = styled.div`
    position: relative;
    min-height: ${IMAGE_HEIGHT};
    max-width: ${MAX_WIDTH};
    min-width: ${MIN_WIDTH};
    overflow: hidden;
`