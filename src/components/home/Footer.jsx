import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <MainCont>
        <div>
            <div>
                <div>
                    <img src="/img/other/logo-gray.png" alt="yanolja" />
                    <select name="" id="">
                        <option value="">패밀리 사이트</option>
                        <option value="">비즈니스사이트</option>
                        <option value="">파트너센터</option>
                        <option value="">호텔업</option>
                        <option value="">야놀자 광고센터</option>
                        <option value="">나우웨이팅</option>
                        <option value="">도도포인트</option>
                    </select>
                </div>
                <div>
                    <span>
                    (주)야놀자 |대표이사 : 이수진, 김종윤, 배보찬 | 사업자 등록번호 : 220-87-42885 | 통신판매업신고 : 강남-14211호 | 메일 : help@yanolja.com
                    관광사업자 등록번호 : 제2016-31호 | 주소 : 서울특별시 강남구 테헤란로108길 42 | 호스팅서비스 제공자 : 주식회사 야놀자
                    고객센터 : 1644-1346 (오전 9시 - 익일 새벽 3시)
                    </span>
                </div>
                <div>
                    <button>회사소개</button>
                    <button>광고제휴문의</button>
                    <button>인재채용</button>
                    <button>개인정보처리방침</button>
                    <button>청소년 보호 정책</button>
                    <button>서비스 이용약관</button>
                    <button>위치정보이용약관</button>
                    <button>사업자 정보확인</button>
                    <button>전자금융거래 이용약관</button>
                    <button>전자금융거래 이용자 유의사항</button>
                </div>
                <div>
                    <img src="" alt="instagram" />
                    <img src="" alt="youtube" />
                    <img src="" alt="meta" />
                    <img src="" alt="naverBlog" />
                    <img src="" alt="naverPost" />
                </div>
                <div>
                    <span>
                    (주) 야놀자는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
                    </span>
                    <span>
                    (주)야놀자가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트 정보, 디자인 및 화면의 구성, UI를 포함하여 일체의 콘텐츠에 대한 무단 복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는 저작권법 및 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.
                    </span>
                    <button>콘텐츠산업 진흥법에 따른 표시</button>
                </div>
                <hr />
                <div>
                    <div>
                        <img src="" alt="ISMS" />
                        <span>
                            정보보호관리체계인증
                            <br/>
                            ISMS
                        </span>
                    </div>
                    <div>
                        <img src="" alt="CCM" />
                        <span>
                            공정거래위원회 인증
                            <br/>
                            소비자중심경영(CCM)
                        </span>
                    </div>
                    <div>
                        <img src="" alt="HiSeoul" />
                        <span>
                            2017하이서울
                            <br/>
                            브랜드 선정
                        </span>
                    </div>
                    <div>
                        <img src="" alt="BrandStar" />
                        <span>
                            2017브랜드스타
                            <br/>
                            숙박앱 부문1위
                        </span>
                    </div>
                    <div>
                        <img src="" alt="MobileAward" />
                        <span>
                            2016모바일어워드코리아
                            <br/>
                            숙박정보부문 대상
                        </span>
                    </div>
                    <div>
                        <img src="" alt="AppAward" />
                        <span>
                            2015앱어워드코리아
                            <br/>
                            숙박정보부문 대상
                        </span>
                    </div>
                    <div>
                        <img src="" alt="KMA" />
                        <span>
                            2015대한민국
                            <br/>
                            마케팅대상 최우수상
                        </span>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </MainCont>
  )
}

export default Footer

const MainCont = styled.div`
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  max-width: 48.5rem;
  width: 100%;
  overflow: cover;
`