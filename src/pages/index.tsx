import React from 'react'
import { graphql } from 'gatsby'
import SampleContainer from '~containers/SampleContainer'

class IndexPage extends React.Component {
  ref: React.RefObject<HTMLDivElement> = React.createRef()

  render() {
    return <SampleContainer sample={'hi.'} />
  }
}

export default IndexPage

// export const query = graphql`
//   query IndexPage {

//   }
// `
