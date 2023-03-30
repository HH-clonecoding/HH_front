import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components'

function Hocance() {
    const [currentBtn, setCurrentBtn] = useState("인천");

    const buttonClickHandler = (e) => {
        setCurrentBtn(e.target.name);
    }

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["GET_Hocance"],
        queryFn: async () => {
            const data = await axios.get(`http://54.180.30.108:3002/api/place/?city=${currentBtn}&splitNumber=4&splitPageNumber=1`)
            return data.data
        }
    })

    useEffect(()=>{
        refetch()
    },[currentBtn])

    if(data === undefined || isLoading)
        return 
            <Loding>
                <img src="/img/other/DualRing.gif" alt="loadingLogo" />
            </Loding>

    const btnInfo = [
        { name: "인천", title: "서울" },
        { name: "대전", title: "경기강원"},
        { name: "부산", title: "휴가에딱"},
        { name: "서울", title: "전국인기"},
    ]

  return (
    <MainCont >
        <LPWrapper>
            <LPHeader>
                <LPTitle>
                    <Span weight='700'>우리도 호캉스 갈까</Span>
                </LPTitle>
            </LPHeader>
            <LPBtnCont>
                <LPBtnWrapper>
                    {btnInfo.map((item) => 
                        <LPBtn key={item.index}
                        focused={currentBtn}
                        name={item.name}
                        onClick={buttonClickHandler}>{item.title}</LPBtn>
                    )}
                </LPBtnWrapper>
            </LPBtnCont>
            <LPCont>
                {data.motelList.map((item) => 
                    <LPDataWrapper>
                        <LPImg src={item?.picture[0]} alt="" />
                        <LPData>
                            <LPinfoText>
                                <Span sizes="14px">{item?.name}</Span>
                                <Span sizes="13px">{item?.star}({item.commentCount})</Span>
                            </LPinfoText>
                            <LPinfoText jc='end'>
                                <span>125,000원</span>
                            </LPinfoText>
                        </LPData>
                    </LPDataWrapper>
                )}
            </LPCont>
        </LPWrapper>
    </MainCont>
  )
}

export default Hocance

const MainCont = styled.div`
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  max-width: 48.5rem;
  width: 100%;
  height: 100%;
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
    padding: 1rem;
`

const LPHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #e6e6e6;
`

const LPTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
`

const LPCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

const LPDataWrapper = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 23%;
`

const LPImg = styled.img`
    border-radius: 5px;
`

const LPData = styled.div`
    display: flex;
    flex-direction: column;
`
const LPBtnCont = styled.div`
    margin-bottom: 1rem;
    border-bottom: 1px solid #e6e6e6;
`
const LPBtnWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const LPBtn = styled.button`
    border: none;
    font-size: 13px;
    padding: 0 0 8px 0;
    border-bottom: ${({ focused, name }) => focused === name ? `2px solid black` : `white`};
    background-color: white;
    color: ${({ focused, name }) => focused === name ? `black` : `#616161`};
    font-weight: ${({ focused, name }) => focused === name ? 700 : 400};
`

const LPinfoText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.jc};
`