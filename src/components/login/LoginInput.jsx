import React from 'react'
import styled from 'styled-components'

function LoginInput({changeInputHandler, signupData}) {
    return (
    <InputCont>
        <span>아이디 또는 이메일</span>
        <Input
            type="text"
            name="userId"
            minLength={8}
            maxLength={20}
            value={signupData.userId || ""}
            onChange={changeInputHandler}
        />
        <span>비밀번호</span>
        <Input
            type="password"
            name="password"
            value={signupData.password || ""}
            onChange={changeInputHandler}
        />
    </InputCont>
  )
}

export default LoginInput

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
    font-size: 1.3rem;
`