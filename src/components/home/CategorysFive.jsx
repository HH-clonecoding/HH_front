import React from 'react'
import styled from 'styled-components'

function CategorysFive() {
  return (
    <MainCont>
      <Wrapper padding='0.3rem 2.5rem 1.5rem 2.5rem' rep='repeat(5, 1fr)'>
        <Category>
          <Img sizes='38px' src="/img/home/underBannerIcon/1.png" alt="" />
          <Span sizes='0.7rem'>킹특가야놀자</Span>
        </Category>
        <Category>
          <Img sizes='38px' src="/img/home/underBannerIcon/2.png" alt="" />
          <Span sizes='0.7rem'>초특가놀먹보</Span>
        </Category>
        <Category>
          <Img sizes='38px' src="/img/home/underBannerIcon/3.png" alt="" />
          <Span sizes='0.7rem'>최저가보상제</Span>
        </Category>
        <Category>
          <Img sizes='38px' src="/img/home/underBannerIcon/4.png" alt="" />
          <Span sizes='0.7rem'>선착순쿠폰</Span>
        </Category>
        <Category>
          <Img sizes='38px' src="/img/home/underBannerIcon/5.png" alt="" />
          <Span sizes='0.7rem'>무한쿠폰룸</Span>
        </Category>
      </Wrapper>
    </MainCont>
  )
}

export default CategorysFive

const MainCont = styled.div`
  display: flex;
  margin: auto;
  max-width: 48.5rem;
  background-color: white;
  border: ${(props) => props.bd};
  border-radius: ${(props) => props.br};
`
const Wrapper = styled.div`
  width: 100%;
  padding: ${(props)=>props.padding};
  display: grid;
  grid-template-columns: ${(props)=>props.rep};
`

const Img = styled.img`
  padding-top: 0.8rem;
  width: ${(props) => props.sizes};
  height: ${(props) => props.sizes};
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`

const Span = styled.span`
    font-size: ${(props) => props.sizes};
    font-weight: 700;
`

const SignupEventContainer = styled.div`
  width: 100%;
  height: 3.3rem;
  display: flex;
  padding: 0.8rem;
`

const SignupEventbanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

const BannerComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`