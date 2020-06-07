import React from 'react';
import { Link } from 'gatsby';
import { Box, Heading } from '@chakra-ui/core';

const LogoText = () => {
  return (
    <Link to="/">
      <Heading as="h4" fontSize="1.6rem">
        <Box as="span" color="red.600">
          nila
        </Box>
        <Box as="span" color="green.500">
          games
        </Box>
      </Heading>
    </Link>
  );
};

export default LogoText;
