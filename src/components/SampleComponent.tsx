import React from 'react'
import styled from '@emotion/styled'

/**
 * Link
 */
const StyledLink = styled('a')`
  color: inherit;
  text-decoration: none;
`

interface SampleComponentProps {
  sample: any
}

const SampleComponent: React.FunctionComponent<SampleComponentProps> = ({ sample }) => {
  return <StyledLink>{sample}</StyledLink>
}

export default SampleComponent
