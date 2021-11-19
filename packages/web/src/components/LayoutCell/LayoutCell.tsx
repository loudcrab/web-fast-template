import { useBreakpoints } from '../../utils/useBreakpoints'
import React, { useMemo } from 'react'
import { Cell } from 'styled-css-grid'

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

export const LayoutCell = ({ children, ...props }) => {
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
  return <Cell {...currentProps}>{children}</Cell>
}
