import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; //내 액션을 한 번에 모아서 처리. 이 기능이
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../_actions/user_action';
import styled from 'styled-components';
import Auth from '../../../hoc/auth';

const Login_page_container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: middle;
  align-items: center;
  padding: 20px 10px;
  width: 500px;
  height: 700px;
`;

const Login_text = styled.div`
  margin: 70px 0;
  font-size: 24px;
  font-weight: 1000;
`;

const Login_form_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
`;

const Input_Email = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid grey;
  }
`;

const Input_PW = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid lightgrey;
  outline: none;
  margin-bottom: 10px;
  padding-left: 10px;
  &:focus{
    border: 1px solid grey;
`;

const Login_btn = styled.button`
  width: 413px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
  margin-top: 5px;
`;

function LoginPage() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault(); //refresh 안 시킴

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        navigate('/');
      } else {
        alert(res.payload.message);
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Login_page_container onSubmit={onSubmitHandler}>
        <Login_text>Login</Login_text>
        <Login_form_container>
          <Input_Email
            onChange={onChangeEmail}
            type='text'
            id='id'
            value={Email}
            placeholder='이메일 입력'
          />
          <Input_PW
            onChange={onChangePassword}
            type='password'
            id='password'
            value={Password}
            placeholder='패스워드 입력'
          />
          <Login_btn>로그인</Login_btn>
        </Login_form_container>
      </Login_page_container>
    </div>
  );
}

export default Auth(LoginPage, false);
