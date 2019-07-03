import { css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

import theme from './theme'

export const GlobalStyles = css`
  ${emotionNormalize}

  html,
  body {
    padding: 0;
    margin: 0;
  }

  * {
    outline: none;
  }
  *:focus {
    outline: none;
  }
}
`

export { theme }
