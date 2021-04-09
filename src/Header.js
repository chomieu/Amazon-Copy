import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import CartIcon from '@material-ui/icons/ShoppingCartOutlined'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'
import MenuIcon from '@material-ui/icons/Menu';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <TopContainer>
        <HeaderLogo>
          <Link to="/">
            <img alt="amazon-logo" src="https://i.imgur.com/ONkcoQP.png" />
          </Link>
        </HeaderLogo>

        <HeaderAddress>
          <LocationIcon />
          <HeaderOption>
            <OptionLineOne className="grayText">Hello</OptionLineOne>
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
          <HeaderOptionFlag>
            <img alt="flag-icon" src="https://i.imgur.com/TpezEg5.png" />
            <DropDownIcon />
          </HeaderOptionFlag>

          <HeaderOption>
            <OptionLineOne>Hello, Sign in</OptionLineOne>
            <OptionLineTwo>Account & Lists<DropDownIcon /></OptionLineTwo>
          </HeaderOption>

          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>

          <HeaderOptionCart>
            <Link to="/cart">
              <CartIcon />
              <HeaderOption>
                <OptionLineOne className="cartCount">0</OptionLineOne>
                <OptionLineTwo>Cart</OptionLineTwo>
              </HeaderOption>
            </Link>
          </HeaderOptionCart>
        </HeaderNavItems>
      </TopContainer>
      <BottomContainer>
        <a href="/"><MenuIcon />All</a>
        <a href="/">Best Sellers</a>
        <a href="/">Today's Deals</a>
        <a href="/">Prime<DropDownIcon /></a>
        <a href="/">Customer Service</a>
        <a href="/">New Releases</a>
        <a href="/">Books</a>
        <a href="/">Fashion</a>
        <a href="/">Kindle Books</a>
        <a href="/">Gift Cards</a>
        <a href="/">Toys & Games</a>
        <a href="/">Amazon Home</a>
        <a href="/">Pharmacy</a>
        <a href="/">Computers</a>
        <a href="/">Find a Gift</a>
        <a href="/">Sell</a>
        <a href="/">Registry</a>
        <a href="/">Video Games</a>
        <a href="/">Organize your backyard</a>
      </BottomContainer>
    </>
  )
}

const TopContainer = styled.div`
  height: 60px;
  background-color: #131921;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 1.3vw;
  white-space: nowrap;
`

const BottomContainer = styled.div`
  height: 39px;
  background-color: #232F3E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding-left: 1.3rem;
  a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    white-space: nowrap;
  }
  a:last-of-type {
    margin: 0 1.3rem 0 3rem;
  }
  a:first-of-type, a:last-of-type {
    font-weight: bold;
  }
  a:nth-of-type(4) {
    margin-right: -1px;
    svg {
    filter: invert(30%);
    transform: scale(0.9);
    }
  }
  `

const HeaderLogo = styled.div`
  margin-top: 9px;
  margin-right: 1.2vw;
  img {
    width: 95px;
  }
`

const HeaderAddress = styled.div`
  display: flex;
  align-items: center;
  .grayText {
    color: lightgray;
  }
  svg {
    transform: scaleY(0.8) translateY(5px);
  }
`

const HeaderOptionFlag = styled.div`
  margin: 0 0.8vw;
  display: flex;
  svg {
    filter: invert(30%);
    transform: scale(0.9);
    align-self: flex-end;
    margin-bottom: -3px;
  }
`

const HeaderOption = styled.div`
  margin-right: 0.8vw;
  display: flex;
  flex-direction: column;
  &:last-of-type {
    margin: 0;
  }
`

const OptionLineOne = styled.div`
  font-size: 12px;
  align-items: flex-end;
`

const OptionLineTwo = styled.div`
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 14px;
  svg {
    filter: invert(30%);
    transform: scale(0.9);
  }
`

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 1vw 0 1.5vw;
  background-color: white;
  min-width: 428px;
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
  svg {
    transform: scale(1.2)
  }
`

const HeaderNavItems = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 23px;
    height: 32px;
    transform: translateY(5px);
  }
`

const HeaderOptionCart = styled.div`
  display: flex;
  margin-left: 0.8vw;
  a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
  }
  svg {
    transform: scale(1.5);
    margin-right: 5px;
  }
  .cartCount {
    color: #F08804;
    font-size: 16px;
    font-weight: 700;
    align-self: center;
    height: 16px;
  }
`
