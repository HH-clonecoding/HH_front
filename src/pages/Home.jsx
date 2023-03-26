import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import AutoBanner from '../components/AutoBanner'
import Carousel from '../components/Carousel'
import CategorysFour from '../components/CategorysFour'
import CategorysFive from '../components/CategorysFive'
import SingupEventBanner from '../components/SignupEventBanner'
import Test from '../components/Test'

function Home() {
  return (
    <>
      <Header />
      <CategorysFour />
      <Test />
      <CategorysFive />
      <SingupEventBanner />

    </>
  )
}

export default Home