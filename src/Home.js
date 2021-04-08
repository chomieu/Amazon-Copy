import React from 'react'
import styled from 'styled-components'
import Product from './Product'

export default function Home() {
  return (
    <Container>
      <Banner>
        <Previous>Previous</Previous>
        <Next>Next</Next>
      </Banner>

      <Content>
        <Product />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`

const Banner = styled.div`
  background-image: url(https://i.imgur.com/Cd7nBy5.png); 
  background-position: center;
  background-size: cover;
  min-height: 600px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  display: flex;
  justify-content: space-between;
  `

const Previous = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  `

const Next = styled.div`

  `
  
  const Content = styled.div`
  background: white;
  padding: 0 10px;
  margin-top: -350px;
  display: flex;
`