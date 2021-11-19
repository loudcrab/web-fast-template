import styled from 'styled-components'
import {
  alignItems,
  AlignItemsProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  flexDirection,
  FlexDirectionProps,
  fontSize,
  height,
  justifyContent,
  JustifyContentProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  gridGap,
  GridGapProps,
  SpaceProps,
  typography,
  TypographyProps,
  width,
  WidthProps
} from 'styled-system'

export const Box: React.FC<BoxProps> = styled.div(
  {
    boxSizing: 'border-box'
  },
  space,
  color,
  layout,
  gridGap,
  flexbox,
  background,
  border,
  fontSize,
  position,
  typography,
  width,
  height,
  justifyContent,
  alignItems,
  flexDirection
)

export interface BoxProps
  extends ColorProps,
    LayoutProps,
    TypographyProps,
    BackgroundProps,
    SpaceProps,
    WidthProps,
    GridGapProps,
    BorderProps,
    JustifyContentProps,
    AlignItemsProps,
    FlexDirectionProps,
    PositionProps {
  [key: string]: any
}
