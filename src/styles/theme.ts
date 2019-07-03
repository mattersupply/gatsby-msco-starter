import { keys, zipObject } from 'lodash'
import facepaint from 'facepaint'

const fontFaces = {}

const rawBreakpoints = [40, 52, 64, 80]
const breakpoints = rawBreakpoints.map((value: number) => `${value}em`)
const breakpointsMap = ['xs', 'sm', 'md', 'lg', 'xl']
const mq = zipObject(
  breakpointsMap,
  [0, ...rawBreakpoints].map((query: number, index: number) => {
    return `(min-width: ${query}em)`
  })
)

const media = keys(mq).reduce((acc: typeof mq, key: string) => {
  acc[key] = `@media ${mq[key]}`
  return acc
}, {})

const exclusiveMq = zipObject(
  breakpointsMap,
  [0, ...rawBreakpoints].map((query: number, index: number) => {
    let q = `(min-width: ${query}em)`
    if (rawBreakpoints.length > index) {
      q += ` and (max-width: ${Number(rawBreakpoints[index]) - 0.01}em)`
    }

    return q
  })
)

const byBreakpoint = facepaint(
  rawBreakpoints.map((query: number) => {
    return `@media (min-width: ${query}em)`
  })
)

const colors = {
  primary: '#000000',
  secondary: '#FFFFFF',

  error: '#E2322A',
  transparent: 'transparent',
  gray: ['#333', '#666', '#999', '#ccc', '#eee', '#f6f6f6', 'rgba(255, 255, 255, 0.2)'],
}

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

// typographic scale
const fontSizes = [
  '0.75rem',
  '1rem',
  '1.333rem',
  '1.777rem',
  '2.369rem',
  '3.157rem',
  '4.209rem',
  '5.61rem',
  '7.478rem',
  '9.969rem',
  '13.288rem',
  '17.713rem',
  '23.612rem',
  '31.475rem',
  '41.956rem',
  '55.927rem',
  '74.551rem',
  '99.376rem',
  '0.563rem',
]

// for any scale, either array or objects will work
const lineHeights = [1, 1.125, 1.25, 1.5, 1.75, 2]

const fontWeights = {
  normal: 400,
  semiBold: 600,
  bold: 700,
}

// border-radius
const radii = [0, 2, 4, 8, 16, 24]

const theme = {
  breakpoints,
  breakpointsMap,
  colors,
  space,
  fontFaces,
  fontSizes,
  lineHeights,
  fontWeights,
  radii,
  mq,
  exclusiveMq,
}

export default theme
export { media, exclusiveMq, byBreakpoint }
