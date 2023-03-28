import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function MyPage() {
    const navi = useNavigate();
    
  return (
    <MainCont>
        <h2>MY 야놀자</h2>
        <MyCategorys margin="1.5rem">
            <LoginCate>
                <LoginArea>
                    <span>가입하고, 초특가 혜택 받자!</span>
                    <span onClick={()=>{navi("/login")}}>로그인 및 회원가입 하기{'>'}</span>
                </LoginArea>
                <button>MY 혜택</button>
            </LoginCate>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div style={{ border: "1px solid #f2f2f2", padding: "1rem"}}>
                    <div>
                        <img src="/imgs/icons/6.mypage/6.point.png" alt="" />
                        <span>포인트</span>
                    </div>
                    <img src="/imgs/icons/6.mypage/asb.png" alt="" />
                </div>
                <div style={{ border: "1px solid #f2f2f2" }}>
                    <>
                    <img src="/imgs/icons/6.mypage/6.coin.png" alt="" />
                    <span>야놀자 코인</span>
                    </>
                    <img src="/imgs/icons/6.mypage/asb.png" alt="" />
                </div>
                <div style={{ border: "1px solid #f2f2f2" }}>
                    <img src="/imgs/icons/6.mypage/6.coupon.png" alt="" />
                    <span>쿠폰함</span>
                    <img src="/imgs/icons/6.mypage/asb.png" alt="" />
                </div>
                <div style={{ border: "1px solid #f2f2f2" }}>
                    <img src="/imgs/icons/6.mypage/6.review.png" alt="" />
                    <span>나의 후기</span>
                    <img src="/imgs/icons/6.mypage/asb.png" alt="" />
                </div>
            </div>
            <div>
                <img src="/imgs/icons/6.mypage/6.like.png" alt="" />
                <span>찜</span>
                <img src="/imgs/icons/6.mypage/asb.png" alt="" />
            </div>
        </MyCategorys>
        <Yogiyo>
            <YogiyoImg src="/imgs/icons/7.other/yogiyo.png" alt="" />
        </Yogiyo>
        <TripReservation>
            <span>비회원 예약 내역</span>
            <div>
                <MyCategorys margin="10px 0px 0.8rem 0px">국내 여행</MyCategorys>
                <img src="/imgs/icons/6.mypage/asb.png" alt="" />
            </div>
            <div>
                <MyCategorys>해외 여행</MyCategorys>
                <img src="/imgs/icons/6.mypage/asb.png" alt="" />
            </div>
        </TripReservation>
        <Yogiyo>
            <YogiyoImg src="/imgs/icons/7.other/rvCancel.png" alt="" />
        </Yogiyo>
        <EventCate>
            <div>
                <img src="/imgs/icons/6.mypage/6.event.png" alt="" />
                <span>이벤트</span>
            </div>
            <div>
                <img src="/imgs/icons/6.mypage/6.exhibi.png" alt="" />
                <span>기획전</span>
            </div>
            <div>
                <img src="/imgs/icons/6.mypage/6.winner.png" alt="" />
                <span>당첨자 발표</span>
            </div>
        </EventCate>
        <div>
            <div>
                <div>
                    <img src="/imgs/icons/6.mypage/6.help.png" alt="" />
                    <span>고객센터</span>
                </div>
                <img src="/imgs/icons/6.mypage/asb.png" alt="" />
            </div>
            <div>
                <span>카카오톡 1:1 문의</span>
                <img src="/imgs/icons/6.mypage/asb.png" alt="" />
            </div>
            <div>
                <div>
                    <span>자주 묻는 질문 FAQ</span>
                    <img src="/imgs/icons/6.mypage/asb.png" alt="" />
                </div>
                <div>
                    <span>공지사항</span>
                    <img src="/imgs/icons/6.mypage/asb.png" alt="" />
                </div>
            </div>
            <div>
                <span>야놀자 정보</span>
                <img src="/imgs/icons/6.mypage/asb.png" alt="" />
            </div>
            <div>
                <span>거의 끝</span>
            </div>
        </div>
    </MainCont>
  )
}

export default MyPage

const MainCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 48.5rem;
  background-color: white;
`

const MyCategorys = styled.div`
    margin: ${(props) => props.margin};
    border-radius: 8px;
    box-shadow: 1px 1px 8px rgb(0, 0, 0, 0.2);
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
    padding: 1rem 1.5rem 1.5rem 1.5rem;
`

const LoginCate = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`

const LoginArea = styled.div`
    display: flex;
    flex-direction: column;
`

const EventCate = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`