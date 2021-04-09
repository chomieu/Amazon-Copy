import React from 'react'
import styled from 'styled-components'

export default function Product() {
  return (
    <Container>
      <h3>The Bubba Wallace Store</h3>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  z-index: 1;
  height: 420px;
  width: 350px;
`
