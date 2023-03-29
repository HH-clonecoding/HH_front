import React from 'react'
import styled from 'styled-components'

function SingupEventBanner() {
  return (
    <MainCont bd="1px solid blue" br="5px">
      <SignupEventContainer>
          <SignupEventInfo>
            <Img sizes='60px' src="/img/home/underBannerIcon/6.png" alt="" />
            <BannerComment>
              <Span sizes='14px'>야놀자가 처음이신가요?</Span>
              <Span weight='700'>회원가입 후 혜택을 받아보세요!</Span>
            </BannerComment>
          </SignupEventInfo>
          <NextBtn>
            <img src="/img/other/btn-next.png" alt="" />
          </NextBtn>
      </SignupEventContainer>
    </MainCont>
  )
}

export default SingupEventBanner 

const MainCont = styled.div`
  display: flex;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 48.5rem;
  background-color: white;
  border: ${(props) => props.bd};
  border-radius: ${(props) => props.br};
`

const SignupEventContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 1rem;
`

const Img = styled.img`
  width: ${(props) => props.sizes};
  height: ${(props) => props.sizes};
`

const SignupEventInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`
const BannerComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  gap: 5px;
`

const Span = styled.span`
  font-size: ${(props) => props.sizes};
  font-weight: ${(props) => props.weight};
`

const NextBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`