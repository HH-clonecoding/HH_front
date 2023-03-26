import React, { useState } from 'react'
import styled from 'styled-components';

function MainNav({select}) {

    const [currentBtn, setCurrentBtn] = useState('1');

    const buttonClickHandler = (e) => {
        setCurrentBtn(e.target.name);
        select(e.target.name);
    }


    return (
        <ButtonContainer>
            <Ul>
                <Li>
                    <NavButton
                        focused={currentBtn}
                        name='1'
                        onClick={buttonClickHandler}>객실선택</NavButton>
                </Li>
                <Li>
                    <NavButton
                        focused={currentBtn}
                        name='2'
                        onClick={buttonClickHandler}>위치/교통</NavButton>
                </Li>
                <Li>
                    <NavButton
                        focused={currentBtn}
                        name='3'
                        onClick={buttonClickHandler}
                    >안내/정책</NavButton>
                </Li>
                <Li>
                    <NavButton
                        focused={currentBtn}
                        name='4'
                        onClick={buttonClickHandler}>시설/서비스</NavButton>
                </Li>
                <Li>
                    <NavButton
                        focused={currentBtn}
                        name='5'
                        onClick={buttonClickHandler}>후기</NavButton>
                </Li>
            </Ul>
        </ButtonContainer>
    );
}

export default MainNav;

const NavButton = styled.button`
    cursor: pointer;
    padding : 0px 15px;
    width: fit-content;
    font-size: 14px;
    padding : 12px 10px;
    border : none;
    margin : 0;
    background-color: transparent;
    border-bottom: ${({ focused, name }) => focused === name ? `2px solid blue` : null};
`
const ButtonContainer = styled.nav`
    width: 100%;
    margin-bottom: 1px;
    padding : 0px 15px;
    background-color: white;
    box-sizing: border-box;
`
const Li = styled.li`
    display: inline-block;
    list-style: none;
    margin: 0;
    padding : 0;

`
const Ul = styled.ul`
    padding: 0;
    margin: 0;
    float: left;
`