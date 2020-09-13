import React from 'react'
import { render } from '@testing-library/react'

import { Icon } from '@app/components'

describe('Icon', () => {
  test('should render correctly', () => {
    const IconRender = render(<Icon.Icon name="green-check" />)

    expect(IconRender).toBeDefined()
    expect(IconRender).toMatchSnapshot()
  })
})
