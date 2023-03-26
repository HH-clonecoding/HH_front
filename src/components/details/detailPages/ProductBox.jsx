import React from 'react'
import styled from 'styled-components';
import { CONTENTS_BACKGROUND_COLOR, PAGE_BACKGROUND_COLOR } from '../../../customValues/pubVariables';
import { HFlex, HFlexSpaceBetween, VFlex } from '../../../customValues/styleStore';

function ProductBox({element}) {
    return (
        <ProductBoxContainer>
            <VFlex width='100%' etc='padding:15px;' gap='12px'>
                <CarouselCase>
                    <Image src="https://yaimg.yanolja.com/v5/2022/08/23/20/640/63053711207211.69050377.jpg" />
                </CarouselCase>
                <VFlex gap='5px'>
                    <TitleSpace>스탠다드 더블</TitleSpace>
                    <SubTitleSpace>Room Only</SubTitleSpace>
                    <RoomInfo>
                        <span>기준 2인 / 최대 2인 · 금연객실</span>
                    </RoomInfo>
                    <HFlexSpaceBetween etc='font-size:14px; padding: 15px 0px;'>
                        <div>
                            <StartTime>숙박</StartTime>(15:00~)
                        </div>
                        <Price>125,000원~</Price>
                    </HFlexSpaceBetween>
                    <HFlex height='20px;' etc='justify-content:right'>
                        {element % 2 == 1
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
    width : 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
`

const Image = styled.img`
    width : 100%;
    height : 100%;
    object-fit: contain;
`