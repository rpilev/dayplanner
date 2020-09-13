import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { SVGS } from '@app/images/svg'
import { IconInterfaces } from '@app/typescript/interfaces'

import SVG from 'react-inlinesvg'

const sizes: IconInterfaces.Sizes = {
  xs: 8,
  sm: 24,
  md: 48,
  lg: 84,
  xl: 128,
}

const IconWrapper = styled.div<IconInterfaces.IconWrapper>`
  ${({ size }) => css`
    width: ${sizes[size]}px;
    height: ${sizes[size]}px;
  `}
`

export const Icon = ({ name, size }: IconInterfaces.Icon): JSX.Element => (
  <IconWrapper size={size}>
    <SVG src={SVGS[name]} />
  </IconWrapper>
)

Icon.defaultProps = {
  size: 'md',
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}
