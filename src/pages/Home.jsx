import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import AutoBanner from '../components/AutoBanner'
import Carousel from '../components/Carousel'
import CategorysFour from '../components/CategorysFour'
import CategorysFive from '../components/CategorysFive'
import SingupEventBanner from '../components/SignupEventBanner'
import Test from '../components/Test'
import { useNavigate } from 'react-router'

function Home() {
  
  const navigation = useNavigate();
  const [id,setId] = useState();
  
  const move = () => {
    navigation(`/detail/${id}`);
  }

  return (
    <>
      <Header />
      <CategorysFour />
      <Test />
      <CategorysFive />
      <SingupEventBanner />
      
      {/* 임시 상세페이지 이동 버튼 : 나중에 삭제할 것 */}
      <input value={id} onChange={(e)=>setId(e.target.value)} />
      <button onClick={move}>상세페이지 이동</button>
    </>
  )
}

export default Home