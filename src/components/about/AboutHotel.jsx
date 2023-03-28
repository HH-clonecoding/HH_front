import React from 'react'
import AboutCarousel from './AboutCarousel';
import BasicInform from './BasicInform';
import FacilityInform from './FacilityInform';
import { VFlex } from '../../customValues/styleStore';
import { MAX_WIDTH } from '../../customValues/pubVariables';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { apis } from '../../axios/apis';

function AboutHotel() {
    const vFlexStyle = `
    width : 100%;
    max-width : ${MAX_WIDTH};
    margin : 48px auto 10px auto;
    background-color : white;
    `;
    const param = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['getDetails'],
        queryFn: async () => {
            const response = await apis.get(`/api/place/${param.id}`);
            return response.data;
        },
    });

    if (!data || isLoading) {
        return <div>로딩 중입니다...</div>;
    }
    if (isError) {
        <div>서버와의 통신 오류</div>
    }

    return (
        <VFlex etc={vFlexStyle}>
            <AboutCarousel images={data.picture}/>
            <BasicInform data={data}/>
            <FacilityInform systems={data.system}/>
        </VFlex>
    )
}

export default AboutHotel;