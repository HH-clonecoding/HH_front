import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
    const navi = useNavigate();
  return (
    <Aside>
        <Nav>
            <NavCategory>
                <Img sizes='24px' src="/imgs/icons/5.footer/5-local.png" alt="" />
                <Span sizes='0.7rem'>지역</Span>
            </NavCategory>
            <NavCategory>
                <Img sizes='24px' src="/imgs/icons/5.footer/5-area.png" alt="" />
                <Span sizes='0.7rem'>내주변</Span>
            </NavCategory>
            <NavCategory>
                <Img sizes='55px' src="/imgs/icons/5.footer/5-mainlogo.png" alt="" />
            </NavCategory>
            <NavCategory>
                <Img sizes='24px' src="/imgs/icons/5.footer/5-like.png" alt="" />
                <Span sizes='0.7rem'>찜</Span>
            </NavCategory>
            <NavCategory onClick={()=>{navi("/mypage")}}>
                <Img sizes='24px' src="/imgs/icons/5.footer/5-my.png" alt="" />
                <Span sizes='0.7rem'>마이</Span>
            </NavCategory>
        </Nav>
    </Aside>
  )
}

export default Footer

const Aside = styled.div`
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    padding: 0.8rem;
    background-color: white;
`
const Nav = styled.div`
    width: 100%;
    max-width: 48.5rem;
    height: 2rem;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    /* background-image: url("/imgs/icons/5.footer/footer.png"); */
    background-position-x: -22px;
    background-position-y: -22px;
    box-shadow: 1px;
`
const NavCategory = styled.div`
    display: grid;
    text-align: center;
`

const Img = styled.img`
    margin: auto;
    width: ${(props) => props.sizes};
    height: ${(props) => props.sizes};
    z-index: 30;
`

const Span = styled.span`
    height: 0.8rem;
    font-size: ${(props) => props.sizes};
`