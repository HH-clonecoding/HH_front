import React from 'react'
import uuid from 'react-uuid'
import { HFlex } from '../../customValues/styleStore'
import CarouselImage from './CarouselImage'

const CarouselModule = ({ images, viewedShot }) => {


    const styleOption = `
        width:100%;
        overflow:hidden; 
        flex-wrap:nowrap;
        transition : all 1s;
        transform: translateX(-${(viewedShot-1)*100}%);
    `

    return (
        <HFlex etc={styleOption}>
            {images.map((element) => <CarouselImage key={uuid()}>{element}</CarouselImage>)}
        </HFlex>
    )
}

export default CarouselModule