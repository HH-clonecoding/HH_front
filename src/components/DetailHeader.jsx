import styled from 'styled-components';
import React from 'react'
import { HFlexSpaceBetween } from '../customValues/styleStore';
import { useNavigate } from 'react-router';
import { useQuery, useQueryClient } from '@tanstack/react-query';

function DetailHeader() {

  const navigate = useNavigate();

  const {data} = useQuery(["getDetails"]);
  
  const cache = useQueryClient();
  console.log(cache);
  
  return (
    <Header>
      <Container>
          <HFlexSpaceBetween height='100%'>
            <ButtonNoBorder onClick={() => navigate(-1)}>
              <img src={process.env.PUBLIC_URL + "/img/detailheader/back.svg"}></img>
            </ButtonNoBorder>
            <div style={{fontSize:'20px',fontWeight:'bold'}}>{data?.name}</div>
            <div></div>
          </HFlexSpaceBetween>
      </Container>
    </Header>
  )
}

export default DetailHeader;

const ButtonNoBorder = styled.button`
  cursor: pointer;
  border : none;
  background-color: transparent;
`

const Header = styled.header`
  position: fixed;
  z-Index : 500;
  top: 0;
  background-color: white;
  width:100%;
  height:48px;
`
const Container = styled.div`
  width: 768px;
  height: 100%;
  margin: 0px auto;
`