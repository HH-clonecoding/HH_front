import React from 'react'
import styled from 'styled-components'

function SlideButtonSet() {
  return (
    <>
      <PrevBtn>
        <BtnImage src="img/left.png" />
      </PrevBtn>
      <NextBtn>
        <BtnImage src="img/right.png" />
      </NextBtn>
    </>
  )
}

export default SlideButtonSet;

const PrevBtn = styled.button`
  position: absolute;
  cursor: pointer;
  top : 50%;
  left : 1rem;
  transform: translateY(-50%);
  width: 3.5rem;
  height: 5rem;
  border : none;
  border-radius: 5px;
  background-color: transparent;
`;
const NextBtn = styled.button`
  position: absolute;
  cursor: pointer;
  top : 50%;
  right : 1rem;
  transform: translateY(-50%);
  width: 3.5rem;
  height: 5rem;
  border : none;
  border-radius: 5px;
  background-color: transparent;
`;
const BtnImage = styled.img`
  width: 100%;
  height: 100%;
`