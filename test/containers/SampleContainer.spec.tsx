import React from 'react'
import { render } from '@testing-library/react'
import SampleContainer from '~containers/SampleContainer'

describe('<SampleContainer />', () => {
    it('renders the sample container', () => {
        const sample = 'Test'
        const { getByText } = render(<SampleContainer sample={sample} />)
        expect(getByText(sample).tagName).toBeTruthy()
    })
})
