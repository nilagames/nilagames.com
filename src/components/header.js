import React from 'react';
import { Link } from 'gatsby';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/core';

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={4}
      bg="purple.500"
      {...props}
    >
      <Box>
        <Flex align="center" mr={5}>
          <Heading
            as="h1"
            size="lg"
            letterSpacing={'0.1rem'}
            textTransform="uppercase"
          >
            <Link to="">
              <Text as="span" color="green.200">
                Nila
              </Text>{' '}
              <Text as="span" color="yellow.200">
                Games
              </Text>
            </Link>
          </Heading>
        </Flex>
      </Box>
      <Box ml="auto">
        <Button variant="solid">About</Button>
      </Box>
    </Flex>
  );
};

export default Header;
