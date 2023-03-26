import React from 'react'
import styled from 'styled-components'

function Categorys_4() {
  return (
    <div>
        <MainCont>
          <Wrapper padding='0.2rem 1.5rem 2rem 1.5rem' rep='repeat(4, 1fr)'>
            <Category>
              <Img sizes='38px' src="/imgs/icons/2.category/2-motel.png" alt="" />
              <Span sizes='0.7rem'>모텔</Span>
            </Category>
            <Category>
              <Img sizes='38px' src="/imgs/icons/2.category/2-hotel.png" alt="" />
              <Span sizes='0.7rem'>호텔/리조트</Span>
            </Category>
            <Category>
              <Img sizes='38px' src="/imgs/icons/2.category/2-pension.png" alt="" />
              <Span sizes='0.7rem'>펜션/풀빌라</Span>
            </Category>
            <Category>
              <Img sizes='38px' src="/imgs/icons/2.category/2-guesthouse.png" alt="" />
              <Span sizes='0.7rem'>게스트하우스</Span>
            </Category>
            <Category>
              <Img sizes='38px' src="/imgs/icons/2.category/2-tiket.png" alt="" />
              <Span sizes='0.7rem'>레저/티켓</Span>
            </Category>
            <Category>
              <Img sizes='38px' src="/imgs/icons/2.category/2-ride.png" alt="" />
              <Span sizes='0.7rem'>교통/항공</Span>
            </Category>
            <Category>
              <Img sizes='38px' src="/imgs/icons/2.category/2-trip.png" alt="" />
              <Span sizes='0.7rem'>해외여행</Span>
            </Category>
            <Category>
              <Img sizes='38px' src="/imgs/icons/2.category/2-total.png" alt="" />
              <Span sizes='0.7rem'>전체카테고리</Span>
            </Category>
          </Wrapper>
        </MainCont>
    </div>
  )
}

export default Categorys_4

const MainCont = styled.div`
  display: flex;
  margin: auto;
  max-width: 48.5rem;
  height: 100%;
  background-color: white;
`
const Wrapper = styled.div`
  width: 100%;
  padding: ${(props)=>props.padding};
  display: grid;
  grid-row-gap: 0.8rem;
  grid-template-columns: ${(props)=>props.rep};
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`

const Img = styled.img`
  padding: 0.8rem 0.8rem 0rem 0.8rem;
  width: ${(props) => props.sizes};
  height: ${(props) => props.sizes};
  height: 100%;
`

const Span = styled.span`
    font-size: ${(props) => props.sizes};
`