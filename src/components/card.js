import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledFlex = styled(Flex)`
  transition: all 0.1s ease-in;
  &:hover {
    box-shadow: 0 16px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const Card = ({ title, description, ...props }) => {
  return (
    <StyledFlex
      w="100%"
      minH="220px"
      textAlign="center"
      borderRadius="12px"
      px="4"
      py="40px"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Box>
        <Heading fontSize="28px" mb="3">
          {title}
        </Heading>
        <Text fontSize="18px">{description}</Text>
      </Box>
    </StyledFlex>
  );
};

export default Card;
