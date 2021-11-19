import { Span } from './Span'
import theme from '@theme'
import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 30px;
  border-radius: ${theme.radii.large}px;
  background-color: ${theme.colors.light[1]};
`

export const Button: React.FC = ({ children }) => {
  return (
    <ButtonStyled color={'green'}>
      <Span fontSize={4} lineHeight={'48px'}>
        {children}
      </Span>
    </ButtonStyled>
  )
}
