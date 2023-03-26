import React from 'react'
import styled from 'styled-components';

function PictureInform({count}) {
    return (
        <InformContainer>
            <StSpan>{`1 / ${count} | 전체 사진`}</StSpan>
            </InformContainer>
    )
}

export default PictureInform;


const InformContainer = styled.div`
    position: absolute;
    bottom : 0px;
    right : 0px;
    font-weight: 500;
    color:white;
    padding : 8px 10px;
    width: fit-content;
    background-color: rgba(0,0,0,0.5);
`
const StSpan = styled.span`
    font-size : 10px;
`