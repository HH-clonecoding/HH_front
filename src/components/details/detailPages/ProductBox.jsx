import React, { useState } from 'react'
import styled from 'styled-components';
import { CONTENTS_BACKGROUND_COLOR } from '../../../customValues/pubVariables';
import { HFlex, HFlexSpaceBetween, VFlex } from '../../../customValues/styleStore';
import CarouselModule from '../../about/CarouselModule';
import SlideButtonSet from '../../about/SlideButtonSet';

function ProductBox({ element }) {
    const [count, setCount] = useState(1);

    return (
        <ProductBoxContainer>
            <VFlex width='100%' etc='padding:15px;' gap='12px'>
                <CarouselCase>
                    <SlideButtonSet count={count} setFunc={setCount} total={element.pictures.length} />
                    <CarouselModule images={element.pictures} current={count} imageSize={true}/>
                </CarouselCase>
                <VFlex gap='5px'>
                    <TitleSpace>{element.roomname}</TitleSpace>
                    <SubTitleSpace>{element.option[0]}</SubTitleSpace>
                    <RoomInfo>
                        <span>기준 최소 {element.minPeople}인 / 최대 {element.maxPeople}인 · {element.smoking ? '흡연객실' : '금연객실'}</span>
                    </RoomInfo>
                    <HFlexSpaceBetween etc='font-size:14px; padding: 15px 0px;'>
                        <div>
                            <StartTime>숙박</StartTime>(15:00~)
                        </div>
                        <Price>125,000원~</Price>
                    </HFlexSpaceBetween>
                    <HFlex height='20px;' etc='justify-content:right'>
                        {Math.floor(Math.random() * 10) % 2 == 1
                            ? <SelectButton>객실 선택하기</SelectButton>
                            : <RoomInfoButton>객실 상세보기</RoomInfoButton>
                        }
                    </HFlex>
                </VFlex>
            </VFlex>
        </ProductBoxContainer>
    )
}

export default ProductBox;

const ProductBoxContainer = styled.div`
    width: 383px;
    box-sizing: border-box;
    background-color: white;
`

const RoomInfoButton = styled.button`
    cursor: pointer;
    padding : 10px 20px;
    background-color: white;
    border : 1px solid lightgray;
    border-radius: 5px;
    color : TEXT_COLOR;
    box-shadow: none;
    font-size: 12px;
`

const SelectButton = styled.button`
    cursor: pointer;
    padding : 10px 20px;
    background-color: #de2e5f;
    border : none;
    border-radius: 5px;
    color : white;
    box-shadow: none;
    font-size: 12px;
`

const StartTime = styled.span`
    font-size: 14px;
    font-weight: bold;
`
const Price = styled.span`
    font-size : 18px;
    font-weight: 700;
`
const RoomInfo = styled.div`
    background-color: ${CONTENTS_BACKGROUND_COLOR};
    font-size : 12px;
    font-weight: bold;
    color: #616161;
    padding: 5px 20px;
    border-radius: 5px;
    margin : 10px 0px;
`
const TitleSpace = styled.div`
    width: 100%;
    font-size: 18px;
    font-weight: 700;
`
const SubTitleSpace = styled.div`
    width: 100%;
    font-size:12px;
    color : gray;
`
const CarouselCase = styled.div`
    position: relative;
    width : 100%;
    height: 220px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
`

const Image = styled.img`
    width : 100%;
    height : 100%;
    object-fit: contain;
`