import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Asider() {
    const navi = useNavigate();
  return (
    <AsideCont>
        <Nav>
            <NavWrapper>
                <NavCategory>
                    <Img sizes='24px' src="/img/home/footer/5-local.png" alt="" />
                    <Span sizes='0.6rem'>지역</Span>
                </NavCategory>
                <NavCategory>
                    <Img sizes='24px' src="/img/home/footer/5-area.png" alt="" />
                    <Span sizes='0.6rem'>내주변</Span>
                </NavCategory>
                <NavCategory onClick={()=>navi("/")}>
                    <ImgAbsol sizes='55px' src="/img/home/footer/5-mainlogo.png" alt="" />
                </NavCategory>
                <NavCategory>
                    <Img sizes='24px' src="/img/home/footer/5-like.png" alt="" />
                    <Span sizes='0.6rem'>찜</Span>
                </NavCategory>
                <NavCategory onClick={()=>{navi("/mypage")}}>
                    <Img sizes='24px' src="/img/home/footer/5-my.png" alt="" />
                    <Span sizes='0.6rem'>마이</Span>
                </NavCategory>
            </NavWrapper>
        </Nav>
    </AsideCont>
  )
}

export default Asider

const AsideCont = styled.div`
    width: 100%;
    position: fixed;
    height: 3.5rem;
    bottom: 0;
    z-index: 20;
    background-color: white;
    box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.2);
`
const Nav = styled.div`
    width: 100%;
    max-width: 48.5rem;
    margin: auto;
    justify-content: space-between;
    background-position-x: -22px;
    background-position-y: -22px;
    box-shadow: 1px;
`
const NavWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`
const NavCategory = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Img = styled.img`
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 5px;
    width: ${(props) => props.sizes};
    height: ${(props) => props.sizes};
`

const ImgAbsol = styled.img`
    position: absolute;
    width: ${(props) => props.sizes};
    height: ${(props) => props.sizes};
    bottom: 1vh;
    left: 48.6%;
`

const Span = styled.span`
    font-size: ${(props) => props.sizes};
`