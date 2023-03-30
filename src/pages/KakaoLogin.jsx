import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'universal-cookie';

function KakaoLogin({getResult, setGetResult}) {
    const navi = useNavigate();
    
    const { data, isLoading } = useQuery({
      queryKey: ["GET_KAKAO_USER"],
      queryFn: async () => {
          const code = new URL(window.location.href).searchParams.get('code')
          const data = await axios.get(`http://54.180.30.108/api/social/kakao/isKaKao?code=${code}`)
          return data.data
      }
    })

    console.log(data);

  return (
    <h1>리다이렉트 페이지</h1>
  )
}

export default KakaoLogin