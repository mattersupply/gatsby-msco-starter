import React from 'react'
import { render } from '@testing-library/react'
import SampleComponent from '../../src/components/SampleComponent'

describe('<SampleComponent />', () => {
    it('renders the sample component', () => {
        const sample = 'Test'
        const { getByText } = render(<SampleComponent sample={sample} />)
        expect(getByText(sample).tagName).toBeTruthy()
        expect(getByText(sample).tagName).toBe('A')
    })
})
