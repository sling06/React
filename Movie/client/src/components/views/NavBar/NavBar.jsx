import React from 'react'
import "./Navbar.css";
import styled from "styled-components";

// const HeaderContainer = styled.div`
//   display: flex;
//   flex-direction: low;
//   justify-content: center;
//   align-items: center;
//   height: 81px;
//   background-color: skyblue;
// `

// const HeaderLogo = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   color: black;
//   font-size: 30px;
//   margin: 15px 5px;
//   margin-left: 50px;
//   cursor: pointer;
//   text-shadow: 1px 1px 1px #000;
// `
// const CenterContainer = styled.div`
//   display: flex;
//   justify-content: flex-start;
// `

// const CenterButton = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: black;
//   width: 80px;
//   height: 50px;
//   font-size: 17px;
//   font-weight : 700;
//   margin-left: 15px;
//   cursor: pointer;
// `

// const RightContainer = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   margin-left: auto;
//   margin-right: 50px;
// `


function Navber(){
    return(
      // <HeaderContainer>
      //   <HeaderLogo>
      //     Logo
      //   </HeaderLogo>
      //   <CenterContainer>
      //     <CenterButton>Movie</CenterButton>
      //     <CenterButton>Favorite</CenterButton>
      //   </CenterContainer>
      //   <RightContainer>
      //     <CenterButton>Login</CenterButton>
      //     <CenterButton>Register</CenterButton>
      //   </RightContainer>
      // </HeaderContainer>
        <>
            <header>
                <h1><a href="#a">Logo</a></h1>
                <h2 className="hide">대메뉴</h2>
                <nav className="lnb">
                    <ul>
                        <li><a href="#a"><span>제품정보</span></a></li>
                        <li><a href="#a"><span>시공사례</span></a></li>
                        <li><a href="#a"><span>고객센터</span></a></li>
                        <li><a href="#a"><span>기업소개</span></a></li>
                        <li><a href="#a"><span>사업분야</span></a></li>
                    </ul>
                </nav>
                <h2 className="hide">관련서비스</h2>
                <nav className="spot">
                    <ul>
                        <li><a href="#a">제품찾기</a></li>
                        <li><a href="#a">SITEMAP</a></li>
                        <li><a href="#a">BLOG</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
    
}

export default Navber