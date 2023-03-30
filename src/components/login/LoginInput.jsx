import React from 'react'

function LoginInput({changeInputHandler, signupData}) {
    return (
    <div>
        <span>아이디</span>
        <input
            type="text"
            name="password"
            minLength={8}
            maxLength={20}
            value={signupData.password || ""}
            onChange={changeInputHandler}
        />
        <span>비밀번호</span>
        <input
            type="password"
            name="passwordCheck"
            value={signupData.passwordCheck || ""}
            onChange={changeInputHandler}
        />
    </div>
  )
}

export default LoginInput