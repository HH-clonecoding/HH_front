import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { apis } from '../../axios/apis';

function LocalPlace() {
    const navi = useNavigate();
    const [currentBtn, setCurrentBtn] = useState('서울');

    const buttonClickHandler = (e) => {
        setCurrentBtn(e.target.name);
    }

    const {data, isLoading, refetch} = useQuery({
        queryKey: ["GET_PLACE"],
        queryFn: async () => {
            const data = await apis.get(`/api/place/?city=${currentBtn}&splitNumber=6&splitPageNumber=1`)
            return data.data;
        }
    })

    console.log("data", data)

    useEffect(()=>{
        refetch()
    },[currentBtn])

    if(data === undefined || isLoading)
        return 
            <Loding>
                <img src="/img/other/DualRing.gif" alt="loadingLogo" />
            </Loding>

    const btnInfo = [
        { name: "서울", title: "추천 주말여행" },
        { name: "인천", title: "인천 호텔" },
        { name: "대전", title: "대전 펜션" },
        { name: "부산", title: "부산 풀빌라 숙소" },
    ]

  return (
    <MainCont >
        <LPWrapper>
            <LPHeader>
                <LPTitle>
                    <Span weight='700'>이 지역은 이 숙소</Span>
                    <Span sizes='13px'>관심 지역 근처의 구매 많은 순 추천</Span>
                </LPTitle>
                <div>
                    <Span sizes='15px' weight='700' color='#0152cc'>전체보기</Span>
                </div>
            </LPHeader>
            <LPBtnWrapper>
                {btnInfo.map((item, index) => 
                    <LPBtn key={index}
                    focused={currentBtn}
                    name={item.name}
                    onClick={buttonClickHandler}>{item.title}</LPBtn>
                )}
            </LPBtnWrapper>
            <LPCont>
                {data?.motelList.map((item, index) => 
                    <LPSlideCont onClick={()=>{navi(`/detail/${parseInt(index)}`)}}>
                        <LPImgCont>
                            <LPImg src={item?.picture[0]} alt=""/>
                        </LPImgCont>
                        <LPData>
                            <LPinfoText>
                                <span>{item?.name}</span>
                                {/* <StarRating starRate={data.star} voteCount={data.commentCount}/> */}
                            </LPinfoText>
                            <LPinfoText jc='end'>
                                <span>125,000원</span>
                            </LPinfoText>
                        </LPData>
                    </LPSlideCont>
                )}
            </LPCont>
        </LPWrapper>
    </MainCont>
  )
}

export default LocalPlace

const MainCont = styled.div`
  margin: auto;
  max-width: 48.5rem;
  width: 100%;
  background-color: white;
  overflow: cover;
`

const Loding = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`

const Span = styled.span`
  font-size: ${(props) => props.sizes};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`

const LPWrapper = styled.div`
    padding: 1.5rem;
`

const LPHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

const LPTitle = styled.div`
    display: flex;
    flex-direction: column;
`

const LPCont = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    overflow: hidden;
`

const LPSlideCont = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: row;
`

const LPImgCont = styled.div`
    width: 100px;
    height: 100px;
`

const LPImg = styled.img`
    border-radius: 5px;
    width: 100%;
    height: 100%;
`

const LPData = styled.div`
    width: 65%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const LPBtnWrapper = styled.div`
    margin-bottom: 1rem;
`

const LPBtn = styled.button`
    padding: 8px 10px 8px 10px;
    margin-right: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 25px;
    font-size: 12px;
    background-color: ${({ focused, name }) => focused === name ? `rgba(1,82,204,.1)` : `white`};
    color: ${({ focused, name }) => focused === name ? `#0152cc` : `#616161`};
    font-weight: ${({ focused, name }) => focused === name ? 700 : 400};
`
// rgba(1,82,204,.1);
// #0152cc;
// #e6e6e6;
const LPinfoText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.jc};
`