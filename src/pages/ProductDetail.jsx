import React from 'react'
import styled from 'styled-components'
import { PAGE_BACKGROUND_COLOR, TEXT_COLOR } from '../customValues/pubVariables';
import AboutHotel from '../components/about/AboutHotel';
import { VFlexCenter } from '../customValues/styleStore';
import Details from '../components/details/Details';

function ProductDetail() {

  return (
    <BodyContainer>
      <VFlexCenter>
        <AboutHotel />
        <Details />
      </VFlexCenter>
    </BodyContainer>
  )
}

export default ProductDetail;

const BodyContainer = styled.article`
  background-color: ${PAGE_BACKGROUND_COLOR};
  height: fit-content;
  min-height: 100vh;
  color : ${TEXT_COLOR};
  font-size: 62.5%;
`;