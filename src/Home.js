import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Banner>

      </Banner>

      <Content>
        item
      </Content>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`

const Banner = styled.div`
  background-image: url(https://i.imgur.com/D20IARn.jpg); 
  background-position: center;
  background-size: cover;
  min-height: 600px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
  background: white;
  padding: 0 10px;
  margin-top: -350px;
`