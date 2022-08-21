import styled from "styled-components";

export const Header = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #fff;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  max-width: 1400px;
`
export const LogoContainer = styled.nav`
    color: #fff;
    justify-content: center;
    width: 210px;
    display: flex;
    align-items: center;
`

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 30px;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000;
`
export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`

export const CenterButton = styled.div`
  display: flex;
  align-items: center;
  color: black;
  width: 80px;
  height: 50px;
  font-size: 17px;
  font-weight : 700;
  margin-left: 15px;
  cursor: pointer;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`