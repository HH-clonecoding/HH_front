import React from 'react'
import uuid from 'react-uuid';
import styled from 'styled-components';
import { facilities, facilitiesName } from '../../customValues/pubVariables';
import { HFlex, HFlexSpaceBetween, VFlex, VFlexCenter } from '../../customValues/styleStore';

function FacilityInform({systems}) {

    const dataArray = systems.map((element) => element.replace(' ',''));
    
    return (
        <CompContainer>
            <VFlex gap='15px'>
                <HFlexSpaceBetween>
                    <Name>인기시설 및 서비스</Name>
                    <HFlex width='fit-content'>
                        <StSpan>전체보기</StSpan>
                    </HFlex>
                </HFlexSpaceBetween>
                <HFlex etc='flex-wrap:wrap; align-items:top;'>
                    {dataArray.map((element) => {
                        return (
                            <VFlexCenter width='4rem' key={uuid()} etc='align-self:flex-start;'>
                                <IconStyle src={facilities[element]} key={uuid()}/>
                                <FacilityName key={uuid()}>{facilitiesName[element]}</FacilityName>
                            </VFlexCenter>
                        )
                    })}
                </HFlex>
            </VFlex>
        </CompContainer>
    )
}

export default FacilityInform;

const FacilityName = styled.div`
    width: 100%;
    text-align: center;
    overflow-wrap: break-word;
    white-space: pre;
`
const IconStyle = styled.img`
    width:100%;
    height: fit-content;
    object-fit: contain;
`

const CompContainer = styled.div`
    padding: 15px;
`
const StSpan = styled.span`
    cursor : pointer;
    font-size: 14px;
    font-weight: 600;
    color : #0152cc;
`
const Name = styled.span`
    font-size: 18px;
    font-weight: 700;
`
const ButtonIcons = styled.button`
    padding : 0px;
    border : none;
    background-color: transparent;
`