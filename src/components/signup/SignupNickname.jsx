import React from 'react'

function SignupNickname({changeInputHandler, signupData}) {
    return (
    <div>
        <span>닉네임</span>
        <input
            type="text"
            name="nickname"
            value={signupData.nickname || ""}
            onChange={changeInputHandler}
        />
    </div>
  )
}

export default SignupNickname