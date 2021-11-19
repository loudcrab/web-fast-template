import { useBreakpoints } from '../../utils/useBreakpoints'
import { breakpoints } from '@constants'
import { useMemo } from 'react'
import { Grid } from 'styled-css-grid'

// import { Grid } from '@emotion/react'

const getMostClosed = (arr, position) => {
  let temp = null
  const newArr = [...arr]
  newArr
    .slice(0, position)
    .reverse()
    .forEach(item => {
      if (!temp && item) {
        temp = item
      }
    })

  return temp
}

export const LayoutGrid = ({ children, ...props }) => {
  const { breakpoint } = useBreakpoints()
  const currentProps = useMemo(() => {
    const newProps = {}

    for (const [key, value] of Object.entries(props)) {
      if (Array.isArray(value)) {
        const temp = getMostClosed(value, breakpoint)
        newProps[key] = temp
      }
    }
    return {
      ...props,
      ...newProps
    }
  }, [props])
  console.log('props', props)
  return <Grid {...currentProps}>{children}</Grid>
}
