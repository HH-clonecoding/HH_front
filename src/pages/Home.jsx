import React, { useState } from 'react'
import Header from '../components/home/Header'
import Asider from '../components/home/Asider'
import CategorysFour from '../components/home/CategorysFour'
import CategorysFive from '../components/home/CategorysFive'
import SingupEventBanner from '../components/home/SignupEventBanner'
import Test from '../components/home/Test'
import LocalPlace from '../components/home/LocalPlace'
import Hocance from '../components/home/Hocance'
import PinkSouth from '../components/home/PinkSouth'
import Footer from '../components/home/Footer'
import { useNavigate } from 'react-router'

function Home() {
  
  const navigation = useNavigate();
  const [id,setId] = useState();
  
  const move = () => {
    navigation(`/detail/${id}`);
  }

  return (
    <div>
      <Header />
      <CategorysFour />
      <Test />
      <CategorysFive />
      <SingupEventBanner />
      <LocalPlace />
      <Hocance />
      <PinkSouth />
      <Asider />
      <Footer />
    </div>
  )
}

export default Home