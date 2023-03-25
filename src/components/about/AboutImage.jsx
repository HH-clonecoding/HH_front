import React from 'react'
import styled from 'styled-components';
import { IMAGE_HEIGHT, MAX_WIDTH } from '../../customValues/pubVariables';

function DetailImage({ children }) {
    return (
        <ImageBox>
            <Image src={children}></Image>
        </ImageBox>
    )
}

export default DetailImage;

const ImageBox = styled.div`
    margin : 0px;
    padding: 0px;
    width: ${MAX_WIDTH};
    height : ${IMAGE_HEIGHT};
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`