import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Section>
      <HeaderContainer>
        <HeaderNav>
          <Img sizes="26px" src="/img/home/header/1-header-menu.png" />
          <SearchDiv>
            <span>킹특가는 최저가 보상</span>
            <SearchIcon sizes="20px" src="/img/home/header/1-header-search.png" /> 
          </SearchDiv>
          <Img sizes="26px" src="/img/home/header/1-header-cart.png" />
        </HeaderNav>
      </HeaderContainer>
    </Section>
  );
}

export default Header

const Section = styled.div`
  width: 100%;
  height: 48px;
  background-color: white;
  position: fixed;
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: inherit;
`

const Img = styled.img`
  padding: 0.8rem;
  width: ${(props) => props.sizes};
  height: ${(props) => props.sizes};
`

const HeaderContainer = styled.div`
  top: 0;
  width: 100%;
`

const HeaderNav = styled.div`
    width: 100%;
    position: relative;
    max-width: 48.5rem;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 2rem; // 48px예정
    padding: 0.8rem;
`

const SearchDiv = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 50px;
  width: 100%;
  height: 1.8rem;
  display: flex;
  padding: 0.5rem 1rem 0rem 1rem;
  justify-content: space-between;
  color: #919191;
  font-size: 0.9rem;
`

const SearchIcon = styled.img`
  width: ${(props) => props.sizes};
  height: ${(props) => props.sizes};
`