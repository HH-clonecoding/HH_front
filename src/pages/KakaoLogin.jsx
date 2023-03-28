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
        const client_id = "fd86458f99e6e909168fa3add520c9ca"
        console.log("code", code);
        mutate(code, grant_type, client_id);
    },[])
    
    const {mutate, isLoading, isSuccess} = useMutation({
        mutationFn: async(payload) => {
            const result = axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}
            &redirect_uri=http://localhost:3000/oauth/callback/kakao
            &code=${code}`, {code: payload});
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