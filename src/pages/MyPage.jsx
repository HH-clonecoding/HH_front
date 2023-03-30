import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import KakaoLogin from './KakaoLogin';
import Asider from '../components/home/Asider';

function MyPage() {
    const navi = useNavigate();
    const [getResult, setGetResult] = useState("");
    console.log(getResult);
    
  return (
    <>
    <Section>
      <HeaderContainer>
        <HeaderNav>
            <h3>MY 야놀자</h3>
        </HeaderNav>
      </HeaderContainer>
    </Section>
    <MainCont>
        <MyCategorys margin="5rem 1.5rem 1.5rem 1.5rem">
            <LoginCate>
                <LoginArea>
                    <Span sizes="12px" color='#525252'>가입하고, 초특가 혜택 받자!</Span>
                    <Span color="#0152cc" fw="700" onClick={()=>{navi("/login")}}>로그인 및 회원가입 하기
                        <img src="/img/mypage/asb.png" alt="asb" />
                    </Span>
                </LoginArea>
                <MyAdventage>MY 혜택</MyAdventage>
            </LoginCate>
            <CateWrapper>
                <CateSet>
                    <CateEach>
                        <img src="/img/mypage/6.point.png" alt="" />
                        <span>포인트</span>
                    </CateEach>
                    <img src="/img/mypage/asb.png" alt="asb" />
                </CateSet>
                <CateSet>
                    <CateEach>
                        <img src="/img/mypage/6.coin.png" alt="" />
                        <span>야놀자 코인</span>
                    </CateEach>
                    <img src="/img/mypage/asb.png" alt="asb" />
                </CateSet>
                <CateSet>
                    <CateEach>
                        <img src="/img/mypage/6.coupon.png" alt="" />
                        <span>쿠폰함</span>
                    </CateEach>
                    <img src="/img/mypage/asb.png" alt="asb" />
                </CateSet>
                <CateSet>
                    <CateEach>
                        <img src="/img/mypage/6.review.png" alt="" />
                        <span>나의 후기</span>
                    </CateEach>
                    <img src="/img/mypage/asb.png" alt="asb" />
                </CateSet>
            </CateWrapper>
            <CateSet>
                <CateEach>
                    <img src="/img/mypage/6.like.png" alt="" />
                    <span>찜</span>
                </CateEach>
                <img src="/img/mypage/asb.png" alt="asb" />
            </CateSet>
        </MyCategorys>
        <Yogiyo>
            <YogiyoImg src="/img/other/yogiyo.png" alt="" />
        </Yogiyo>
        <TripReservation>
            <span style={{fontWeight: "700"}}>비회원 예약 내역</span>
            <MyReserve>
                <span>국내 여행</span>
                <img src="/img/mypage/asb.png" alt="asb" />
            </MyReserve>
            <MyReserve>
                <span>해외 여행</span>
                <img src="/img/mypage/asb.png" alt="asb" />
            </MyReserve>
        </TripReservation>
        <Yogiyo>
            <YogiyoImg src="/img/other/rvCancel.png" alt="" />
        </Yogiyo>
        <EventCate>
            <EventCateEach>
                <img src="/img/mypage/6.event.png" alt="" />
                <span>이벤트</span>
            </EventCateEach>
            <EventCateEach>
                <img src="/img/mypage/6.exhibi.png" alt="" />
                <span>기획전</span>
            </EventCateEach>
            <EventCateEach>
                <img src="/img/mypage/6.winner.png" alt="" />
                <span>당첨자 발표</span>
            </EventCateEach>
        </EventCate>
        <HelpCont>
            <HelpSet>
                <HelpEach>
                    <img src="/img/mypage/6.help.png" alt="" />
                    <span>고객센터</span>
                </HelpEach>
                <HelpEach gap="10px">
                    <Span>365일 오전 9시 ~ 익일 오전 3시 운영</Span>
                    <img src="/img/mypage/asb.png" alt="asb" />
                </HelpEach>
            </HelpSet>
            <HelpSet>
                <span>카카오톡 1:1 문의</span>
                <img src="/img/mypage/asb.png" alt="asb" />
            </HelpSet>
            <HelpFAQ>
                <div style={{width: "50%", borderRight:"1px solid #f2f2f2"}}>
                    <HelpEachSP pdr="1rem">
                        <span>자주 묻는 질문 FAQ</span>
                        <img src="/img/mypage/asb.png" alt="asb" />
                    </HelpEachSP>
                </div>
                <div style={{width: "50%"}}>
                    <HelpEachSP pdl="1rem">
                        <span>공지사항</span>
                        <img src="/img/mypage/asb.png" alt="asb" />
                    </HelpEachSP>
                </div>
            </HelpFAQ>
            <HelpSet>
                <span>야놀자 정보</span>
                <img src="/img/mypage/asb.png" alt="asb" />
            </HelpSet>
        </HelpCont>
    </MainCont>
    <Asider />
    </>
  )
}

export default MyPage

const Section = styled.div`
  width: 100%;
  height: 48px;
  background-color: white;
  position: fixed;
  margin: 0;
  padding-bottom: 8px;
  display: block;
  box-sizing: inherit;
  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.2);
  z-index: 1;
`

const HeaderContainer = styled.div`
  top: 0;
  width: 100%;
  padding-left: 1rem;
`

const HeaderNav = styled.div`
    width: 100%;
    position: relative;
    max-width: 48.5rem;
    z-index: 20;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 auto;
    height: 2rem; // 48px예정
    padding: 0.8rem;
`

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 48.5rem;
  background-color: #f8f8f8;
`

const MyCategorys = styled.div`
    margin: ${(props) => props.margin};
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.2);
`

const CateWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: white;
    border: none;
    border-radius: 10px;
`

const Yogiyo = styled.div`
    background-color: #f2f2f2;
    height: 100%;
    margin: 0;
    padding: 0;
`

const YogiyoImg = styled.img`
    width: 100%;
`

const TripReservation = styled.div`
    margin: 0;
    font-size: 0.9rem;
    padding: 1.5rem 1.2rem 1.5rem 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 11px;
`

const MyReserve = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 5px;
    background-color: white;
`

const LoginCate = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: white;
`

const LoginArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const EventCate = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid #f2f2f2;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    background-color: white;
`

const EventCateEach = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 12px;
`

const CateSet = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f2f2f2;
    padding: 1rem;
    font-size: 14px;
    background-color: white;
`

const CateEach = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const HelpCont = styled.div`
    height: 35vh;
    margin-top: 1rem;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
`

const HelpSet = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f2f2f2;
    padding: 1.1rem;
    font-size: 14px;
    background-color: white;
`

const HelpFAQ = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    border: 1px solid #f2f2f2;
    margin-top: 1rem;
    padding: 1.1rem;
    font-size: 14px;
    background-color: white;
`

const HelpEach = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.jc};
    align-items: center;
    gap: ${(props) => props.gap};
`

const HelpEachSP = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${(props) => props.pdl};
    padding-right: ${(props) => props.pdr};
`
const Span = styled.span`
    color: ${(props) => props.color};
    font-size: ${(props) => props.sizes};
    font-weight: ${(props) => props.fw}
`

const MyAdventage = styled.button`
    border: 1px solid #0152cc;
    border-radius: 5px;
    color: #0152cc;
    background-color: white;
    padding: 0;
    font-size: 12px;
    height: 2rem;
    width: 4.5rem;
`