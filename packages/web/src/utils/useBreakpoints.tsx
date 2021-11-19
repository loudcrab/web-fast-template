import { useWindowSize } from './useWindowSize'
import { breakpoints } from '@constants'
import { useEffect, useState } from 'react'

export const useBreakpoints = () => {
  const { width } = useWindowSize()
  const [state, setState] = useState({
    breakpoint: 0,
    breakpointValue: 0
  })
  useEffect(() => {
    let breakpoint = 0
    let breakpointValue = 0
    breakpoints.forEach((item, id) => {
      if (parseInt(item) < width) {
        breakpoint = id + 1
        breakpointValue = parseInt(item)
      }
    })
    setState({
      breakpoint,
      breakpointValue
    })
  }, [width])

  return state
}
