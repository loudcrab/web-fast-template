import { Box, BoxProps } from './Box'
import React from 'react'

type IProps = BoxProps

export const Span: React.FC<IProps> = props => (
  <Box as="span" {...props}>
    {props.children}
  </Box>
)
