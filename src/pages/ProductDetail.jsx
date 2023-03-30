import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PAGE_BACKGROUND_COLOR, TEXT_COLOR } from '../customValues/pubVariables';
import AboutHotel from '../components/about/AboutHotel';
import { VFlexCenter } from '../customValues/styleStore';
import Details from '../components/details/Details';
import DetailHeader from '../components/DetailHeader';
import DetailFooter from '../components/DetailFooter';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { apis } from '../axios/apis'

function ProductDetail() {
  const param = useParams();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['getDetails'],
    queryFn: async () => {
      const response = await apis.get(`/api/place/${param.id}`);
      return response.data;
    },
  });

  useEffect(() => {
    refetch();
  },[]);

  console.log("pd", data);

  if (!data || isLoading) {
    return <div>로딩 중입니다...</div>;
  }
  if (isError) {
    <div>서버와의 통신 오류</div>
  }

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