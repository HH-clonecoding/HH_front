import React from 'react'
import AboutCarousel from './AboutCarousel';
import BasicInform from './BasicInform';
import FacilityInform from './FacilityInform';
import { VFlex } from '../../customValues/styleStore';
import { MAX_WIDTH } from '../../customValues/pubVariables';
import { useQuery } from '@tanstack/react-query';

function AboutHotel() {
    const vFlexStyle = `
    width : 100%;
    max-width : ${MAX_WIDTH};
    margin : 48px auto 10px auto;
    background-color : white;
    `;

    const { data } = useQuery(["getDetails"]);
    console.log(data);

    return (
        <VFlex etc={vFlexStyle}>
            <AboutCarousel images={data.picture}/>
            <BasicInform data={data}/>
            <FacilityInform systems={data.system}/>
        </VFlex>
    )
}

export default AboutHotel;