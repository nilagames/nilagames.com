import React from 'react'
import {
  theme,
  CSSReset,
  ColorModeProvider,
  ThemeProvider,
} from '@chakra-ui/core'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>{element}</ColorModeProvider>
    </ThemeProvider>
  )
}
