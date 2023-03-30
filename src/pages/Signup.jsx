import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import SignupEmail from '../components/signup/SignupEmail';
import SignupPassword from '../components/signup/SignupPassword';
import SignupNickname from '../components/signup/SignupNickname';
import SignupHeader from '../components/signup/SignupHeader';
import { idCheck, pwCheck } from '../shared/regExp';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { apis } from '../axios/apis';

function Signup() {
    const navi = useNavigate();
    const [componentState, setComponentState] = useState(1);
    const [signupData, setSignupData] = useState({
        userId: "",
        password: "",
        passwordCheck: "",
        nickname: ""
    });

    //signupData에 사용자 입력 값을 넣어주는 함수
    const changeInputHandler = (event) => {
        const { name, value } = event.target;
        setSignupData((pre) => ({...pre, [name]: value}));
    }

    //다음 버튼 로직 함수
    const nextBtnHandler = () => {
        componentState < 4 && setComponentState(componentState+1)
    }

    //유효성 검사 / 검사 후 mutate로 요청
    const checkSignupData = () => {
        const { userId, password, passwordCheck } = signupData;
        if(userId ===""|| password ==="" || passwordCheck ===""){
          alert("아이디, 비밀번호, 비밀번호 재확인을 모두 입력해주세요")
          return;
        }
        if (!idCheck(userId)) {
          alert('올바른 이메일 형식을 입력해주세요');
          return;
        }
        if (!pwCheck(password)) {
          alert('영문 대소문자, 숫자, 특수문자 조합으로 8-20자 이하로 입력해주세요');
          return;
        } else {
          alert('회원가입 완료되었습니다')
        }
        mutate(signupData);
        navi("/login");
    }

    //회원가입 query요청 함수
    const {mutate, isLoading, isSuccess} = useMutation({
        mutationFn: async(payload) => {
            apis.post("/api/user/signup", payload);
        }
    })


  return (
    <div>
        <Header>
            <SignupHeader
                componentState={componentState}
                setComponentState={setComponentState}
            />
        </Header>
        <MainCont>
            {(() => {
                switch(componentState) {
                    case 1:
                        return <SignupEmail 
                            signupData={signupData}
                            changeInputHandler={changeInputHandler}
                        />;
                    case 2:
                        return <SignupPassword 
                            signupData={signupData}
                            changeInputHandler={changeInputHandler}
                        />;
                    case 3:
                        return <SignupNickname 
                            signupData={signupData}
                            changeInputHandler={changeInputHandler}
                        />;
                    default:
                        return null;
                }
            })()}
        </MainCont>
        <MainCont>
            {
                componentState === 3
                ? <LoginBtn onClick={checkSignupData}>회원가입 완료</LoginBtn>
                : <LoginBtn onClick={nextBtnHandler}>다음</LoginBtn>
            }
        </MainCont>
    </div>
  )
}

export default Signup

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 48px;
`

const MainCont = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 1rem;
  max-width: 45.5rem;
  height: 100%;
  background-color: white;
  overflow: cover;
`

const LoginBtn = styled.button`
  width: 100%;
  height: 48px;
  background-color: #de2e5f;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  &:hover{
    background-color: #bb1e4a;
  }
`