import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import BasketIcon from '@material-ui/icons/ShoppingBasket'
import LocationIcon from '@material-ui/icons/LocationOn'

export default function Header() {
  return (
    <Container>
      <HeaderLogo>
        <img alt="amazon-logo" src="https://i.imgur.com/ONkcoQP.png" />
      </HeaderLogo>

      <HeaderAddress>
        <LocationIcon />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderAddress>

      <HeaderSearch>
        <HeaderSearchSelect>
          <option>All</option>
        </HeaderSearchSelect>
        <HeaderSearchInput type="text" />
        <HeaderSearchIcon>
          <SearchIcon />
        </HeaderSearchIcon>
      </HeaderSearch>

      <HeaderNavItems>
        <img alt="flag-icon" src="https://i.imgur.com/TpezEg5.png" />
        
        <HeaderOption>
          <OptionLineOne>Hello, Chomkan</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <BasketIcon />
          <CartCount>4</CartCount>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  background-color: #131921;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

const HeaderLogo = styled.div`
  margin-top: 9px;
  img {
    width: 95px;
    margin: 0 1.4rem;
  }
`

const HeaderAddress = styled.div`
  display: flex;
  align-items: center;
`

const OptionLineOne = styled.div`
  font-size: 12px;
  line-height: 10px;
`

const OptionLineTwo = styled.div`
  font-weight: 700;
  font-size: 14px;
`

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 2rem;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #F90;
  }
`

const HeaderSearchSelect = styled.select`
  font-size: 12px;
  background-color: #F3F3F3;
  border: 0;
  border-right: 0.5px solid lightgray;
  padding: 9px;
  :focus {
    outline: none;
  }
`

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`

const HeaderSearchIcon = styled.div`
  background-color: #FEBD69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderNavItems = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 30px;
    margin-right: 2rem;
  }
`

const HeaderOption = styled.div`
  padding: 10px 2rem 10px 0;

`

const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
`

const CartCount = styled.div`
  padding-left: 9px;
`
