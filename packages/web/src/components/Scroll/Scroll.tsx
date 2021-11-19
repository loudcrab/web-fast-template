import { Box, BoxProps } from '@components'
import React from 'react'
import styled from 'styled-components'

const ScrollBox = styled(Box)`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(87, 92, 112, 0.15);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(87, 92, 112, 0.5);
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
  }
`

export const StyledScrollBox: React.FC<BoxProps> = ({
  children,
  ...props
}) => <ScrollBox {...props}>{children}</ScrollBox>
