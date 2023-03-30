import React from 'react'
import styled from 'styled-components'
import LoginHeader from '../components/login/LoginHeader'

function Login() {
  const REST_API_KEY = "fd86458f99e6e909168fa3add520c9ca"
  const REDIRECT_URI = "http://team8-miniproject.s3-website.ap-northeast-2.amazonaws.com/auth/kakao/callback"
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  // const kakaoLogin = () => {
  //   navi(KAKAO_AUTH_URL);
  // }

  return (
    <div>
        <Header>
          <LoginHeader />
        </Header>
        <LoginLogoCont>
          <div>
            <img src="/img/login/mainLogo.png" alt="" />
          </div>
          <div>
            {/* <img src="/img/login/kakao.png" alt="" onClick={kakaoLogin}/> */}
            <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}>kakao</a>
            <img src="/img/login/naver.png" alt="" />
          </div>
        </LoginLogoCont>
        <div>

        </div>
    </div>
  )
}

export default Login

const LoginLogoCont = styled.div`
  border: 1px solid black;
  background-color: white;
  max-width: 45.5rem;
  height: 100%;
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