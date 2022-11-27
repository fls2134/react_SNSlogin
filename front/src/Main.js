import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { REDIRECT_URI, REST_API_KEY } from "./KakaoSocialLogin";

function Main() {  
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];
  
  const getToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
    .then(res => res.json())
    .then(data => {
      if(data.access_token) {
        localStorage.setItem('kakao_token', data.access_token);
        console.log(data);
      }
      else navigate('/')
    })
  }

  

  useEffect(() => {
    if(!location.search) return;
    getToken();
  })
  
  return (
    <div>MAIN</div>
  );
}

export default Main;
