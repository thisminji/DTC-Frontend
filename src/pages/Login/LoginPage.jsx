import React, { useEffect } from "react";
import LoginImage from "src/assets/LoginImage.svg";
import KakaoLogin from "src/assets/KakaoLogin.svg";
import "./style.css";


export const LoginPage = () => {
  let clientId = process.env.REACT_APP_KAKAO_API_KEY;
  let redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  // 카카오 로그인 버튼 클릭 시 실행
  const handleKakaoLogin = async () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = kakaoAuthUrl; // 카카오 인증 페이지로 리디렉션
  };

  return (
    <div className="login">
      <div className="text-wrapper">Customize your travel</div>
      <p className="div">
        Explore destinations, save attractions and things to do, set up when and
        time
      </p>
      <img
        className="group"
        alt="Group"
        src={LoginImage}
      />
      <img
        className="kakao-login"
        alt="Kakao login"
        src={KakaoLogin}
        onClick={handleKakaoLogin}
      />
    </div>
  );
};
