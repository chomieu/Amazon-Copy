import React from 'react'
import styled from 'styled-components'

export default function SignIn({ header }) {
  return (
    <Container>
      <Wrapper>
        <Header>{header}</Header>
        <SignInBtn>Sign in securely</SignInBtn>
      </Wrapper>
      <Ads>This is NOT Amazon.com</Ads>
    </Container>
  )
}

const Container = styled.div`
  z-index: 1;
  height: 420px;
  width: 350px;
  margin: 0 10px 20px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `
  
const Wrapper = styled.div`
  background-color: white;
  padding: 20px 20px;
  height: 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const Header = styled.h2`
background-color: white;
font-size: 21px;
`

const SignInBtn = styled.button`
margin-top: 17px;
padding: 7px;
border: 1px solid gray;
border-radius: 4px;
background-image: linear-gradient(to top, #EFBB3A 0%, #F9E7BB 100%);
`

const Ads = styled.div`
  background-color: white;
  z-index: 1;
  height: 250px;
  width: 300px;
  margin-top: 20px;
  align-self: center;
  display: flex;
  text-align: center;
  align-items: center;
  color: red;
  font-size: 30px;
  font-weight: bold;
`