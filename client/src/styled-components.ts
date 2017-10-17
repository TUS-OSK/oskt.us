import * as styledComponents from 'styled-components'
import * as React from 'react'

import ThemeInterface from './theme'

const $ = <TProps, U extends HTMLElement = HTMLElement>(
  styledFunction: styledComponents.StyledFunction<React.HTMLProps<U>>
): styledComponents.StyledFunction<TProps & React.HTMLProps<U>> => {
  return styledFunction
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>

export { css, injectGlobal, keyframes, ThemeProvider, $ }
export default styled
