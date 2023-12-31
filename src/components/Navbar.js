import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData'
import { Button } from './Button'
import { CgMenuRight } from 'react-icons/cg'

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: #0000000d;
`

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  curcor: pointer;
  text-decoration: none;
  filter: drop-shadow(#242424 -3px 0px 15px);
`

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`

const MenuBars = styled(CgMenuRight)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 40px;
    width: 40px;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 27%);
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavMenuLinks = styled(Link)`
  ${NavLink}
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to='/'>MOD VSN</Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button css={`background: none; border: 1px solid white; `} to='/contact' primary='true'>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  )
}