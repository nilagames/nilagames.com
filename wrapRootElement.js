import React from 'react'
import {
  theme,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from 'gatsby-plugin-chakra-ui'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>{element}</ColorModeProvider>
    </ThemeProvider>
  )
}
