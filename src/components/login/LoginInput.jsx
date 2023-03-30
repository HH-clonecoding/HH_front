import React from 'react'

function LoginInput({changeInputHandler, signupData}) {
    return (
    <div>
        <span>아이디</span>
        <input
            type="text"
            name="userId"
            minLength={8}
            maxLength={20}
            value={signupData.userId || ""}
            onChange={changeInputHandler}
        />
        <span>비밀번호</span>
        <input
            // type="password"
            name="password"
            value={signupData.password || ""}
            onChange={changeInputHandler}
        />
    </div>
  )
}

export default LoginInput