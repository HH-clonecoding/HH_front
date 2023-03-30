import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function SignupHeader({componentState, setComponentState}) {
  const navi = useNavigate();

  return (
    <Container>
      {
        componentState === 0 ?
        (window.confirm("사이트에서 나갈까요?") ? navi("/mypage") : setComponentState(1))
        :
        <div onClick={()=>{
          setComponentState(componentState-1);
        }}>
          <img src="/img/other/btn-back.png" alt="" />
        </div>
      }

      <div>
          <p>회원가입 {`(${componentState}/3)`}</p>
      </div>
      <div>
          {/* 더미 */}
      </div>
    </Container>
  )
}

export default SignupHeader

const Container = styled.div`
    border: ${(props) => props.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 47rem;
    background-color: white;
    font-size: 1.1rem;
    font-weight: bold;
`