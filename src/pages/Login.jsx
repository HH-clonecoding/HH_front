import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import LoginHeader from '../components/login/LoginHeader'

function Login() {
  const navi = useNavigate();
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
        <Header>
          <LoginHeader />
        </Header>
        <LoginLogoCont>
          <div>
            <img src="/img/login/mainLogo.png" alt="" />
          </div>
          <div style={{width: "100%", padding:"1rem"}} onClick={()=>{navi("/EmailLogin")}}>
            <EmailDiv>이메일로 로그인</EmailDiv>
          </div>
          <SignupAside>
            <SignupDiv>
              <span>아직 야놀자 회원이 아니신가요?</span>
              &nbsp;
              <span style={{fontWeight:"700"}} onClick={()=>{navi("/Signup")}}>회원가입 {'>'}</span>
            </SignupDiv>
            <FooterBanner src="/img/login/loginFooterBanner.png" alt="" />
          </SignupAside>
        </LoginLogoCont>
    </div>
  )
}

export default Login

const LoginLogoCont = styled.div`
  background-color: white;
  max-width: 45.5rem;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 48px;
`

const EmailDiv = styled.div`
  border: 1px solid #767676;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
`

const FooterBanner = styled.img`
  width: 100%;
  bottom: 100px;
`

const SignupAside = styled.div`
  max-width: 45.5rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
`

const SignupDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`