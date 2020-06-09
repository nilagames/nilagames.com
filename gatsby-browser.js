import React from 'react';
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  Heading,
  Text,
} from '@chakra-ui/core';
import theme from './theme';
import { UrlContextProvider } from './src/contexts/UrlContext';
import { MDXProvider } from '@mdx-js/react';

export const wrapRootElement = (
  { element },
  { isResettingCSS = true, isUsingColorMode = true }
) => (
  <MDXProvider components={{ Heading, Text }}>
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
  </MDXProvider>
);
