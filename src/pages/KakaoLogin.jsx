import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
// import Cookies from 'universal-cookie/cjs/Cookies'
import styled from 'styled-components';
import axios from 'axios'
import { useEffect } from 'react'
import Cookies from 'universal-cookie';
import { useState } from 'react';

function KakaoLogin({getResult, setGetResult}) {
    const navi = useNavigate();
    // const [getCode, setGetCode] = useState('');

    // useEffect(()=>{
    //   const code = new URL(window.location.href).searchParams.get("code");
    //   mutate(code)
    // },[])

    // useEffect(() => {
    //   (async () => {
    //     try {
    //       const code = new URL(window.location.href).searchParams.get("code");
    //       const res = await axios.get(`http://54.180.30.108/api/social/kakao/isKaKao?code=${code}`);
    //       const token = res.headers.authorization;
    //       console.log(res);
    //       Cookies.set('token', token);
    //       navi('/mypage');
    //     } catch (e) {
    //       console.error(e);
    //       navi('/mypage');
    //     }
    //   })();
    // }, []);

    // useEffect(() => {
    //   const code = new URL(window.location.href).searchParams.get('code')
    //   const kakaoLogin = async () => {
    //   const result = await axios
    //       .get(`http://54.180.30.108/api/social/kakao/isKaKao?code=${code}`)
    //       .then((res) => {
    //         console.log(result.data);
    //         Cookies.set('token', res.headers.authorization)
    //         window.location.href = "/mypage";
    //       })
    //   }
    //   kakaoLogin()
    // }, [])

    const { data, isLoading } = useQuery({
      queryKey: ["GET_KAKAO_USER"],
      queryFn: async () => {
          const code = new URL(window.location.href).searchParams.get('code')
          const data = await axios.get(`http://54.180.30.108/api/social/kakao/isKaKao?code=${code}`)
          return data.data
      }
    })

    console.log(data);
    
    // const {mutate, isLoading, isSuccess} = useMutation({
    //     mutationFn: async(payload) => {
    //         const response = await axios.get(`http://54.180.30.108/api/social/kakao/isKaKao?code=${payload}`);
    //         console.log("result", response);
    //     },
    //     onSuccess: () => {
    //       navi("/mypage");
    //     }
    // })

    // const {mutate, isLoading, isSuccess} = useMutation({
    //   mutationFn: async() => {
    //       const code = new URL(window.location.href).searchParams.get('code')
    //       const response = await axios.get("http://54.180.30.108/api/social/kakao/isKaKao", {code: payload});
    //       console.log("result", response);
    //   },
    //   onSuccess: () => {
    //     navi("/mypage");
    //   }
    // })

  return (
    <h1>리다이렉트 페이지!!!</h1>
  )
}

export default KakaoLogin

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100vh;
  margin: auto;
  align-items: center;
`