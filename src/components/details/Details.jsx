import React, { useState } from 'react'
import styled from 'styled-components';
import { CONTENTS_BACKGROUND_COLOR, MAX_WIDTH, PAGE_BACKGROUND_COLOR } from '../../customValues/pubVariables';
import { VFlex } from '../../customValues/styleStore';
import MainNav from './MainNav';
import NavDetails from './NavDetails';

function Details() {
    const [selected, setSelected] = useState('1');
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
    margin-bottom: 48px;
`;
