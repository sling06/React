import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../_actions/user_action';

export default function Auth(SpecificComponent, option, adminRoute = null) {
  /*
  option
  null => 아무나 출입 가능 페이지
  true => 로그인 유저만
  false => 로그인 유저는 출입불가
  */
  function AuthenticationCheck() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        //로그인 안함
        if (!res.payload.isAuth) {
          if (option) {
            alert('로그인이 필요한 페이지입니다.');
            navigate('/login');
          }
        } else {
          //로그인 함
          if (adminRoute && !res.payload.isAdmin) {
            alert('권한이 필요합니다.');
            navigate('/');
          } else {
            if (option === false) {
              navigate('/');
            }
          }
        }
      });
    });

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
