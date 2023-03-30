import React from 'react'

function SignupEmail({changeInputHandler, signupData}) {
    return (
    <div>
        <span>이메일</span>
        <input
            type="text"
            name="userId"
            value={signupData.userId || ""}
            onChange={changeInputHandler}
        />
    </div>
  )
}

export default SignupEmail