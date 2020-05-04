/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Box } from '@chakra-ui/core';

import Header from './header';

const Layout = ({ children, title }) => [
  <>
    <Box className="siteContainer">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box className="siteContent">
        <Header />
        <Box as="main" className="main">
          {children}
        </Box>
      </Box>
    </Box>
  </>,
];

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
