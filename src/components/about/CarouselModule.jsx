import React from 'react'
import uuid from 'react-uuid'
import { HFlex } from '../../customValues/styleStore'
import CarouselImage from './CarouselImage'

const CarouselModule = ({ images, current, imageSize }) => {

    const styleOption = `
        width:fit-content; 
        height:100%;
        flex-wrap:nowrap;
        transition : all 0.5s;
        flex : none;
        transform: translateX(-${(current-1)*(imageSize? 353:768)}px);
    `;

    return (
        <HFlex etc={styleOption}>
            {images.map((element) => <CarouselImage imageSize={imageSize} key={uuid()}>{element}</CarouselImage>)}
        </HFlex>
    )
}

export default CarouselModule