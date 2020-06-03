import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import theme from './theme';
import { UrlContextProvider } from './src/contexts/UrlContext';

export const wrapRootElement = (
  { element },
  { isResettingCSS = true, isUsingColorMode = true }
) => (
  <UrlContextProvider>
    <ThemeProvider theme={theme}>
      {isResettingCSS && !isUsingColorMode && <CSSReset />}
      {isUsingColorMode ? (
        <ColorModeProvider value="light">
          {isResettingCSS && <CSSReset />}
          {element}
        </ColorModeProvider>
      ) : (
        element
      )}
    </ThemeProvider>
  </UrlContextProvider>
);
