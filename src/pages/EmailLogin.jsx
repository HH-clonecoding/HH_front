import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import LoginHeader from '../components/login/LoginHeader';
import LoginInput from '../components/login/LoginInput';
import { idCheck, pwCheck } from '../shared/regExp';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { apis } from '../axios/apis';

function EmailLogin() {
  const navi = useNavigate();
  const [componentState, setComponentState] = useState(1);
  const [signupData, setSignupData] = useState({
    userId: "",
    password: "",
  });

  //signupData에 사용자 입력 값을 넣어주는 함수
  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    setSignupData((pre) => ({ ...pre, [name]: value }));
  }

  // //다음 버튼 로직 함수
  // const nextBtnHandler = () => {
  //   componentState < 4 && setComponentState(componentState + 1)
  // }

  const loginHandler = () => {
    const loginResult = mutate(signupData);
    console.log(loginResult);
  }


  // console.log(func);

  //유효성 검사 / 검사 후 mutate로 요청
  const checkSignupData = () => {
    const { userId, password } = signupData;
    if (userId === "" || password === "") {
      alert("아이디, 비밀번호를 모두 입력해주세요")
      return;
    }
    if (!idCheck(userId)) {
      alert('올바른 이메일 형식을 입력해주세요');
      return;
    }
    if (!pwCheck(password)) {
      alert('영문 대소문자, 숫자, 특수문자 조합으로 8-20자 이하로 입력해주세요');
      return;
    }
    if (signupData.password !== signupData.passwordCheck) {
      alert('password 입력이 일치하지 않습니다');
      return;
    }
    else {
      alert('환영합니다!')
    }
    mutate(signupData);
    navi("/");
  }

  //회원가입 query요청 함수
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async (payload) => {
      apis.post(`/api/user/login`, payload);
    }
  })


  return (
    <div>
      <Header>
        <LoginHeader />
      </Header>
      <MainCont>
        <LoginInput
          signupData={signupData}
          changeInputHandler={changeInputHandler}
        />
      </MainCont>
      <MainCont>
        <button onClick={loginHandler}>로그인 하기</button>
      </MainCont>
    </div>
  )
}

export default EmailLogin

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 48px;
`

const MainCont = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 0 auto;
  padding: 1rem;
  max-width: 45.5rem;
  height: 100%;
  background-color: white;
  overflow: cover;
`