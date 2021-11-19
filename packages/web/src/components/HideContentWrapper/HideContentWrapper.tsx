import { Box, BoxProps } from '../Box'
import { maxWidth } from '@constants'
import React from 'react'

const getMarginLeft = () =>
  maxWidth.map(item => {
    if (item === '100%') return -20
    return `calc( (${item}px - 100vw ) / 2)`
  })

export const HideContentWrapper: React.FC<BoxProps> = React.memo(
  props => (
    <Box width="100vw" marginLeft={getMarginLeft()} {...props}>
      {props.children}
    </Box>
  )
)
