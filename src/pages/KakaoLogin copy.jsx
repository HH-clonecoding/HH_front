import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
// import Cookies from 'universal-cookie/cjs/Cookies'
import axios from 'axios'
import { useEffect } from 'react'

function KakaoLogin() {
    const navi = useNavigate();

    useEffect(()=>{
        const code = new URL(window.location.href).searchParams.get("code");
        const grant_type = "authorization_code";
        mutate(code);
    },[])
    
    const {mutate, isLoading, isSuccess} = useMutation({
        mutationFn: async(payload) => {
            const result = axios.post("http://54.180.30.108:3002/social/kakao/isKaKao", {code: payload});
            console.log("result", result);
        },
        onSuccess: () => {
          window.alert("로그인 성공!");
          navi("/mypage");
        }
    })

  return (
    <div>
        <img src="/img/other/DualRing.gif" alt="" />
    </div>
  )
}

export default KakaoLogin