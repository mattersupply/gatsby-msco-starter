import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { theme, GlobalStyles } from '~styles/index'

class App extends React.PureComponent<any, any> {
  constructor(props: object) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <html lang="en" />
        </Helmet>
        <Global styles={GlobalStyles} />
        {this.props.children}
      </ThemeProvider>
    )
  }
}

export default App
