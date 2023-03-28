import React from 'react'
import Header from '../components/home/Header'
import Asider from '../components/home/Asider'
import AutoBanner from '../components/home/AutoBanner'
import Carousel from '../components/home/Carousel'
import CategorysFour from '../components/home/CategorysFour'
import CategorysFive from '../components/home/CategorysFive'
import SingupEventBanner from '../components/home/SignupEventBanner'
import Test from '../components/home/Test'
import LocalPlace from '../components/home/LocalPlace'
import styled from 'styled-components'
import Hocance from '../components/home/Hocance'

function Home() {
  return (
    <CPContainer>
      <Header />
      <CategorysFour />
      <Test />
      <CategorysFive />
      <SingupEventBanner />
      <LocalPlace />
      <Hocance />
      <Asider />
    </CPContainer>
  )
}

export default Home

const CPContainer = styled.div`
  height: 500vh;
`