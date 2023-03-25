import React from 'react'
import styled from 'styled-components';

function PictureInform({count}) {
    return (
        <InformContainer>
            <span>{`1 / ${count} | 전체 사진`}</span>
            </InformContainer>
    )
}

export default PictureInform;


const InformContainer = styled.div`
    position: absolute;
    bottom : 0px;
    right : 0px;
    font-size: 10px;
    font-weight: 500;
    color:white;
    padding : 5px;
    width: fit-content;
    background-color: rgba(0,0,0,0.5);
`
const StSpan = styled.span`
    
`