import React from 'react'
import styled from 'styled-components'
import { PAGE_BACKGROUND_COLOR, TEXT_COLOR } from '../customValues/pubVariables';
import AboutHotel from '../components/about/AboutHotel';
import { VFlexCenter } from '../customValues/styleStore';
import Details from '../components/details/Details';
import DetailHeader from '../components/DetailHeader';
import DetailFooter from '../components/DetailFooter';

function ProductDetail() {

  return (
    <Container>
      <DetailHeader />
      <BodyContainer>
        <VFlexCenter>
          <AboutHotel />
          <Details />
        </VFlexCenter>
      </BodyContainer>
      <DetailFooter />
    </Container>
  )
}

export default ProductDetail;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${PAGE_BACKGROUND_COLOR};
`

const BodyContainer = styled.article`
  background-color: ${PAGE_BACKGROUND_COLOR};
  height: fit-content;
  min-height: ${window.innerHeight};
  color : ${TEXT_COLOR};
  font-size: 62.5%;
`;