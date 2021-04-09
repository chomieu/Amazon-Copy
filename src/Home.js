import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'

export default function Home() {
  const [index, setIndex] = useState(0)
  const background = ["0s6yi9w.png", "yx036J5.jpg", "rfm1xew.png", "p56avpn.jpg", "CM7TloN.jpg", "fNMnTwF.jpg", "ddzukB6.jpg"]

  const handlePreviousBtn = () => {
    index > 0 ? setIndex(index - 1) : setIndex(6)
  }

  const handleNextBtn = () => {
    index < 6 ? setIndex(index + 1) : setIndex(0)
  }

  return (
    <Container>
      <Banner style={{ backgroundImage: `url(https://i.imgur.com/${background[index]})` }}>
        <Carousel>
          <img
            alt="previous-icon"
            src="https://i.imgur.com/GRE39LY.png?1"
            onClick={handlePreviousBtn} />
        </Carousel>
        <Carousel>
          <img
            alt="next-icon"
            src="https://i.imgur.com/GRE39LY.png?2"
            onClick={handleNextBtn} />
        </Carousel>
      </Banner>

      <Content>
        <Product />
      </Content>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`

const Banner = styled.div`
  background-position: center;
  background-size: cover;
  min-height: 600px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  display: flex;
  justify-content: space-between;
  img {
    height: 52px;
    width: 34px;
  }
`

const Carousel = styled.div`
  height: 250px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Content = styled.div`
  padding: 0 10px;
  margin-top: -350px;
  display: flex;
`