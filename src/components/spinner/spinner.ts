import styled, { keyframes } from 'styled-components'

import * as Interfaces from './interfaces'

const DEFAULT_SPEED = 3

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<Interfaces.Spinner>`
  display: inline-block;
  animation: ${rotate360} ${({ speed = DEFAULT_SPEED }) => speed}s linear infinite;

  & > * {
    display: block;
  }
`
