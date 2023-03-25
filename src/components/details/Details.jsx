import React, { useState } from 'react'
import styled from 'styled-components';
import { CONTENTS_BACKGROUND_COLOR, MAX_WIDTH } from '../../customValues/pubVariables';
import { VFlex } from '../../customValues/styleStore';
import MainNav from './MainNav';
import NavDetails from './NavDetails';

function Details() {
    const [selected, setSelected] = useState();
    return (
        <Main>
            <VFlex>
                <MainNav select={setSelected} />
                <NavDetails select={selected} />
            </VFlex>
        </Main>
    )
}

export default Details;

const Main = styled.main`
    width: ${MAX_WIDTH};
    height : fit-content;
    background-color: white;
    /* background-color: ${CONTENTS_BACKGROUND_COLOR}; */
`;
