/**
 * SampleContainer
 *
 * Containers are components that have very little display logic, but rather piece together components.
 * Containers use GraphQL queries to fetch and arrange the content in the right way.
 */

import React from 'react'
import { graphql } from 'gatsby'

import SampleComponent from '~components/SampleComponent'

interface SampleContainerProps {
  sample: any
}

class SampleContainer extends React.PureComponent<SampleContainerProps> {
  render() {
    return <SampleComponent {...this.props} />
  }
}

export default SampleContainer

// export const query = graphql`
//   fragment SampleSection on SomeData {
//     id
//     sample
//   }
// `
