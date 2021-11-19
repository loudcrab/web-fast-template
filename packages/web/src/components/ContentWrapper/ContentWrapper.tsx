import { Box, BoxProps } from '../Box'
import { maxWidth } from '@constants'

export const ContentWrapper: React.FC<BoxProps> = props => (
  <Box
    maxWidth={maxWidth}
    margin={['0 20px', '0 20px', '0 20px', '0 auto']}
    {...props}
  >
    {props.children}
  </Box>
)
