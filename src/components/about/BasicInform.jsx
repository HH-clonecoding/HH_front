import React from 'react'
import styled from 'styled-components';
import { PAGE_BACKGROUND_COLOR } from '../../customValues/pubVariables';
import BuildingLocation from './BuildingLocation';
import StarRating from './StarRating';
import { HFlex, HFlexSpaceBetween, VFlex } from '../../customValues/styleStore';

function BasicInform({data}) {
    if(!data) return <div>로딩중</div>;

    
    return (
        <CompContainer>
            <ClassifyText>일반 호텔</ClassifyText>
            <VFlex etc='gap:15px;'>
                <NameSpace>
                    <HFlexSpaceBetween>
                        <Name>{data.name}</Name>
                        <HFlex width='fit-content'>
                            <ButtonIcons><img src={process.env.PUBLIC_URL+'/img/share.png'} /></ButtonIcons>
                            <ButtonIcons><img src={process.env.PUBLIC_URL+'/img/heart.png'} /></ButtonIcons>
                        </HFlex>
                    </HFlexSpaceBetween>
                </NameSpace>
                <StarRating starRate={data.star} voteCount={data.commentCount}/>
                <BuildingLocation />
                <Line />
            </VFlex>
        </CompContainer>
    );
}

export default BasicInform;
const Line = styled.div`
  width: auto;
  height : 1px;
  background-color: #f0f0f0;
  margin: 15px 0px 0px 0px;
`

const CompContainer = styled.div`
    padding: 15px;
`
const ClassifyText = styled.div`
    margin-bottom: 5px;
    font-size : 12px;
`
const NameSpace = styled.div`
    font-size : 24px;
    
`

const Name = styled.span`
    font-size: 22px;
    font-weight: 700;
`
const ButtonIcons = styled.button`
    padding : 0px;
    border : none;
    background-color: transparent;
`