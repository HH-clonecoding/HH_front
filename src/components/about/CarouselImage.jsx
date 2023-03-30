import React from 'react'
import styled from 'styled-components';
import { IMAGE_HEIGHT, MAX_WIDTH } from '../../customValues/pubVariables';

function CarouselImage({ imageSize,children }) {
    return (
        <ImageBox imageSize={imageSize}>
            <Image imageSize={imageSize} src={children}></Image>
        </ImageBox>
    )
}

export default CarouselImage;

const ImageBox = styled.div`
    margin : 0px;
    padding: 0px;
    width: ${({imageSize}) => imageSize ? '353px' : MAX_WIDTH};;
    height : ${({imageSize}) => imageSize ? '100%' : IMAGE_HEIGHT};;
`
const Image = styled.img`
    width: ${({imageSize}) => imageSize ? '100%' : MAX_WIDTH};
    height: ${({imageSize}) => imageSize ? '100%' : IMAGE_HEIGHT};
    object-fit: fill;
`