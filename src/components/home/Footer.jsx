import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <MainCont>
        <Wrapper>
            <FooterLv1>
                <img src="/img/other/logo-gray.png" alt="yanolja" />
                <FooterSelect name="" id="">
                    <option value="https://business.yanolja.com/web/kr/index">패밀리 사이트</option>
                    <option value="">비즈니스사이트</option>
                    <option value="">파트너센터</option>
                    <option value="">호텔업</option>
                    <option value="">야놀자 광고센터</option>
                    <option value="">나우웨이팅</option>
                    <option value="">도도포인트</option>
                </FooterSelect>
            </FooterLv1>
            <FooterLv2>
                <span>(주)야놀자 | 대표이사 : 이수진, 김종윤, 배보찬 | 사업자 등록번호 : 220-87-42885 | 통신판매업신고 : 강남-14211호 | 메일 : help@yanolja.com</span>
                <span>관광사업자 등록번호 : 제2016-31호 | 주소 : 서울특별시 강남구 테헤란로108길 42 | 호스팅서비스 제공자 : 주식회사 야놀자</span>
                <span>고객센터 : 1644-1346 (오전 9시 - 익일 새벽 3시)</span>
            </FooterLv2>
            <FooterLv3 mb="5px">
                <FooterLv3Span>회사소개</FooterLv3Span>
                <FooterLv3Span>광고제휴문의</FooterLv3Span>
                <FooterLv3Span>인재채용</FooterLv3Span>
                <FooterLv3Span>개인정보처리방침</FooterLv3Span>
                <FooterLv3Span>청소년 보호 정책</FooterLv3Span>
                <FooterLv3Span>서비스 이용약관</FooterLv3Span>
                <FooterLv3Span>위치정보이용약관</FooterLv3Span>
                <FooterLv3Span>사업자 정보확인</FooterLv3Span>
            </FooterLv3>
            <FooterLv3 mb="1rem">
                <FooterLv3Span>전자금융거래 이용약관</FooterLv3Span>
                <FooterLv3Span>전자금융거래 이용자 유의사항</FooterLv3Span>
            </FooterLv3>
            <FooterLv4>
                <span>
                (주) 야놀자는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
                </span>
                <span>
                (주)야놀자가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트 정보, 디자인 및 화면의 구성, UI를 포함하여 일체의 콘텐츠에 대한 무단 복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는 저작권법 및 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.
                </span>
                <FooterLv4div>콘텐츠산업 진흥법에 따른 표시</FooterLv4div>
            </FooterLv4>
            <FooterLv5>
                <FooterLvEach>
                    <img src="/img/other/award-07.png" alt="ISMS" />
                    <span>
                        정보보호관리체계인증
                        <br/>
                        ISMS
                    </span>
                </FooterLvEach>
                <FooterLvEach>
                    <img src="/img/other/award-08.png" alt="CCM" />
                    <span>
                        공정거래위원회 인증
                        <br/>
                        소비자중심경영(CCM)
                    </span>
                </FooterLvEach>
                <FooterLvEach>
                    <img src="/img/other/award-09.png" alt="HiSeoul" />
                    <span>
                        2017하이서울
                        <br/>
                        브랜드 선정
                    </span>
                </FooterLvEach>
                <FooterLvEach>
                    <img src="/img/other/award-10.png" alt="BrandStar" />
                    <span>
                        2017브랜드스타
                        <br/>
                        숙박앱 부문1위
                    </span>
                </FooterLvEach>
                <FooterLvEach>
                    <img src="/img/other/award-11.png" alt="MobileAward" />
                    <span>
                        2016모바일어워드코리아
                        <br/>
                        숙박정보부문 대상
                    </span>
                </FooterLvEach>
                <FooterLvEach>
                    <img src="/img/other/award-12.png" alt="AppAward" />
                    <span>
                        2015앱어워드코리아
                        <br/>
                        숙박정보부문 대상
                    </span>
                </FooterLvEach>
                <FooterLvEach>
                    <img src="/img/other/award-13.png" alt="KMA" />
                    <span>
                        2015대한민국
                        <br/>
                        마케팅대상 최우수상
                    </span>
                </FooterLvEach>
            </FooterLv5>
        </Wrapper>
    </MainCont>
  )
}

export default Footer

const MainCont = styled.div`
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 10rem;
  max-width: 48.5rem;
  width: 100%;
  overflow: cover;
` 
const Wrapper = styled.div`
    padding: 1rem;
    color: #919191;
    font-size: 11.3px;
`
const FooterLv1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`
const FooterSelect = styled.select`
    border: 1px solid #e6e6e6;
    color: #919191;
    padding: 8px;
    width: 14rem;
`

const FooterLv2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: 4px;
`
const FooterLv3 = styled.div`
    display: inline-flex;
    gap: 5px;
    margin-bottom: ${(props) => props.mb};
`

const FooterLv3Span = styled.span`
    font-size: 10px;
    border: 1px solid #c3c3c3;
    padding: 5px;
    &:hover{
        border: 1px solid #767676;
    }
`
const FooterLv4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 1rem;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid #e6e6e6;
`

const FooterLv4div = styled.div`
    width: 140px;
    font-size: 10px;
    border: 1px solid #c3c3c3;
    padding: 5px;
    &:hover{
        border: 1px solid #767676;
    }
    text-align: center;
`

const FooterLv5 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const FooterLvEach = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
`