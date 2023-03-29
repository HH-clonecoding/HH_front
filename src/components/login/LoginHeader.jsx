import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function LoginHeader({componentState, setComponentState}) {
  const navi = useNavigate();

  return (
    <Container>
        <div onClick={()=>{
          navi("/mypage")
        }}>
          <img src="/imgs/icons/7.other/btn-back.png" alt="" />
        </div>
      <div>
          <p>로그인</p>
      </div>
      <div>
          {/* 더미 */}
      </div>
    </Container>
  )
}

export default LoginHeader

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