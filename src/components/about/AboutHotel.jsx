import React from 'react'
import DetailCarousel from './AboutCarousel';
import BasicInform from './BasicInform';
import FacilityInform from './FacilityInform';
import { VFlex } from '../../customValues/styleStore';
import { MAX_WIDTH } from '../../customValues/pubVariables';

function AboutHotel() {
    const vFlexStyle = `
    width : 100%;
    max-width : ${MAX_WIDTH};
    margin : 48px auto 10px auto;
    background-color : white;
    `;

    return (
        <VFlex etc={vFlexStyle}>
            <DetailCarousel />
            <BasicInform />
            <FacilityInform />
        </VFlex>
    )
}

export default AboutHotel;