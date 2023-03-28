import React from 'react'
import styled from 'styled-components';
import { IMAGE_HEIGHT, MAX_WIDTH } from '../../customValues/pubVariables';

function CarouselImage({ children }) {
    return (
        <ImageBox>
            <Image src={children}></Image>
        </ImageBox>
    )
}

export default CarouselImage;

const ImageBox = styled.div`
    margin : 0px;
    padding: 0px;
    width: 100%;
    height : 100%;
`
const Image = styled.img`
    width: ${MAX_WIDTH};
    height: ${IMAGE_HEIGHT};
    object-fit: cover;
`