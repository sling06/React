import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../../hoc/auth';
import { useDispatch } from 'react-redux';
import { logout } from "../../../_actions/user_action";
import styled from 'styled-components';

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout()).then((res) => {
      if (res.payload.isAuth === false) {
        alert("이미 로그아웃 상태입니다.!");
      } else {
        alert("로그아웃 성공");
        navigate("/");
      }
    });
  };

  return (
    <div>
      LandingPage
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
}

export default LandingPage
