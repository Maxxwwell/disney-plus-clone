import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <Logo1 src="/images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Get Premier Acces to Raya and the Last Dragon for free with Disney+ subscription. As of 03/26/21.
                    Disney Bundle will increase by $1.
                </Description>
                <Logo1 src="/images/cta-logo-two.png" />

            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-image: url("/images/login-background.jpg");
        /* background-image: url("https://1u0b5867gsn1ez16a1p2vcj1-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/hero_disney-plus-waterfall.jpg"); */
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
    }
`

const Content = styled.div`
    max-width: 650px;
    padding-top: 80;
    padding-bottom: 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
`

const Logo1 = styled.img`

`

const SignUp = styled.button`
    width: 100%;
    background-color: #0063e5;
    color: white;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`