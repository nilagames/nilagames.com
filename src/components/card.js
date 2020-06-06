import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
  transition: all 0.1s ease-in;
  &:hover {
    box-shadow: 0 16px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const Card = ({ Image, title, ...props }) => {
  return (
    <StyledBox w="100%" borderRadius="12px" p="4" {...props}>
      <Image />
      <Heading fontSize="28px" textAlign="center" mb="3">
        {title}
      </Heading>
    </StyledBox>
  );
};

export default Card;
