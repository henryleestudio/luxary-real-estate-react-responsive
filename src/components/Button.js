import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background: ${({ primary }) => ( primary ? '#fff' : 'none')};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => ( big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => ( primary ? '#fff' : '#242424')};
  border: ${({ primary }) => ( primary ? '1px solid #fff' : '1px solid #242424')};
  font-size: ${({ big }) => ( big ? '20px' : '14px')};

  &:hover {
  transform: translateY(-2px);
  }
`
/* adding the "&" symbol allows us to append hover options 
   transform: translateY(-2px); cool motion up effect when hover*/
