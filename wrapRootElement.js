import React from 'react'
import { theme, ThemeProvider } from 'gatsby-plugin-chakra-ui'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
