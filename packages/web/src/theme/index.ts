import { breakpoints } from '@constants'

export default {
  colors: {
    gray: ['#858484', '#ECECEC', '#FAFAFA', '#989797', '#C0C0C0'],
    light: ['#FFF', '#E1E1E1']
  },
  fonts: {
    Roboto: "'Roboto', sans-serif",
    Prosto: "'Prosto One', cursive"
  },
  breakpoints,
  borderWidths: {
    input: 1
  },
  radii: {
    minimal: 2,
    normal: 4,
    input: 6,
    inputSmall: 10,
    medium: 8,
    large: 12,
    xLarge: 16,
    extra: 20
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: [0, 100, 200, 300, 400, 500, 600, 700, 800]
}
