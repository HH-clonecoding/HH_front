import React from 'react'
import styled from 'styled-components'

function SignupEmail({changeInputHandler, signupData}) {
    return (
    <InputCont>
        <span>이메일</span>
        <Input
            type="text"
            name="userId"
            value={signupData.userId || ""}
            onChange={changeInputHandler}
        />
    </InputCont>
  )
}

export default SignupEmail

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
`