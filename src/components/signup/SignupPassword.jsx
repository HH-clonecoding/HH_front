import React from 'react'
import styled from 'styled-components'

function SignupPassword({changeInputHandler, signupData}) {
    return (
    <InputCont>
        <span>비밀번호</span>
        <Input
            type="password"
            name="password"
            placeholder='영문+숫자+특수문자 8~20자리'
            minLength={8}
            maxLength={20}
            value={signupData.password || ""}
            onChange={changeInputHandler}
        />
        <span>비밀번호 확인</span>
        <Input
            type="password"
            name="passwordCheck"
            value={signupData.passwordCheck || ""}
            onChange={changeInputHandler}
        />
    </InputCont>
  )
}

export default SignupPassword

const InputCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #767677;
    margin-bottom: 2rem;
`

const Input = styled.input`
    width: 100%;
    height: 3rem;
    border: none;
    border-bottom: 1px solid black;
    &:focus{
        outline: none;
    }
    font-size: 1rem;
    margin-bottom: 1rem;
`