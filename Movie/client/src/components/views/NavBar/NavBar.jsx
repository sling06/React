import React from 'react'
import{
    Header,
    HeaderContainer,
    LogoContainer,
    HeaderLogo,
    CenterContainer,
    CenterButton,
    RightContainer,
} from './NavBarElements';

function Navber(){
    return(
        <>
            <Header>
                <HeaderContainer>
                    <LogoContainer>
                        <HeaderLogo>
                        Logo
                        </HeaderLogo>
                    </LogoContainer>
                    <CenterContainer>
                        <CenterButton>Movie</CenterButton>
                        <CenterButton>Favorite</CenterButton>
                    </CenterContainer>
                    <RightContainer>
                        <CenterButton>Login</CenterButton>
                        <CenterButton>Register</CenterButton>
                    </RightContainer>
                </HeaderContainer>
            </Header>
        </>
    )
    
}

export default Navber