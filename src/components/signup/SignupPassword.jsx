import React from 'react'

function SignupPassword({changeInputHandler, signupData}) {
    return (
    <div>
        <span>비밀번호</span>
        <input
            type="password"
            name="password"
            placeholder='영문+숫자+특수문자 8~20자리'
            minLength={8}
            maxLength={20}
            value={signupData.password || ""}
            onChange={changeInputHandler}
        />
        <span>비밀번호 확인</span>
        <input
            type="password"
            name="passwordCheck"
            value={signupData.passwordCheck || ""}
            onChange={changeInputHandler}
        />
    </div>
  )
}

export default SignupPassword