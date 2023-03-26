import React from 'react'
import styled from 'styled-components'

function SingupEventBanner() {
  return (
    <MainCont bd="1px solid blue" br="5px" style={{marginTop: "0.5rem"}}>
      <SignupEventContainer>
        <SignupEventbanner>
          <Img sizes='60px' src="/imgs/icons/4.underBannerIcon/6.png" alt="" />
          <BannerComment>
            <span>야놀자가 처음이신가요?</span>
            <span style={{fontWeight:"700"}}>회원가입 후 혜택을 받아보세요!</span>
          </BannerComment>
          <span style={{display: "flex", justifyContent:"end", alignItems:"end"}}>
            <h1>{'>'}</h1>
          </span>
        </SignupEventbanner>
      </SignupEventContainer>
    </MainCont>
  )
}

export default SingupEventBanner

const MainCont = styled.div`
  display: flex;
  margin: auto;
  max-width: 48.5rem;
  height: 100%;
  background-color: white;
  border: ${(props) => props.bd};
  border-radius: ${(props) => props.br};
`

const Img = styled.img`
  padding-top: 0.8rem;
  width: ${(props) => props.sizes};
  height: ${(props) => props.sizes};
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