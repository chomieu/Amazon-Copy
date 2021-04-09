import React from 'react'
import styled from 'styled-components'

export default function Product({ header, image, footer }) {
  return (
    <Container>
      <Wrapper>
        <Header>{header}</Header>
        <Image alt={image} src={image}></Image>
      </Wrapper>
      <Footer>{footer}</Footer>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  z-index: 1;
  height: 420px;
  width: 350px;
  margin: 0 10px 20px 10px;
  box-sizing: border-box;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Wrapper = styled.div`

`

const Header = styled.h2`
  background-color: white;
  font-size: 21px;
`

const Image = styled.img`
  margin: 10px 0;
  width: 100%;
`

const Footer = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: darkCyan;
`
