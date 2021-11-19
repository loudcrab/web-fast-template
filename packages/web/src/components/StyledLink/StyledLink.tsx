import { BoxProps } from '../Box'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink: React.FC<BoxProps> = styled(Link)`
  text-decoration: none;

  color: #000;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
