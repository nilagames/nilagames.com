import React from 'react';
import { Flex, Box, Text, Heading, Image } from '@chakra-ui/core';

const Questions = () => {
  return (
    <Flex
      maxW="720px"
      mx="auto"
      my={6}
      px={6}
      flexDirection="column"
      justifyContent="center"
    >
      <Heading as="h2" my={6} textAlign="center">
        Questions
      </Heading>
      <Box my={3} p={6} bg="orange.100" borderRadius="4px">
        <Heading as="h2" fontSize="24px" textTransform="uppercase">
          1: Solve the math
        </Heading>
        <Text fontSize="20px" mt={3}>
          Nishanth bought 24 mangoes for 140 rupees. First day, he sold 13
          mangoes for 9 rupees each. Second day, he sold another 9 mangoes for
          much lesser price of 7 rupees each. Third day, he sold the remaining
          mangoes for 5 rupees each. How much profit did he get after sold all
          the mangoes?
        </Text>
      </Box>
      <Box my={3} p={6} bg="green.100" borderRadius="4px">
        <Heading as="h2" fontSize="24px">
          2: Time related puzzle
        </Heading>
        <Text fontSize="20px" mt={3}>
          Thaswin watch TV everyday. On weekdays, he watch 24 mins everyday. On
          weekends, he watch 2 hours 42 mins everyday.
          <br />
          <strong>Q 1:</strong> How many hours does he watch TV in a week?
          <br />
          <strong>Q 2:</strong> How many hours does he watch TV in a month
          (i.e., 31 days)?
          <strong>Q 3:</strong> How many hours does he watch TV in a year (i.e.,
          365 days)?
        </Text>
      </Box>
      <Box my={3} p={6} bg="purple.100" borderRadius="4px">
        <Heading as="h2" fontSize="24px" textTransform="uppercase">
          3: Find the sequence
        </Heading>
        <Text fontSize="20px" mt={3}>
          1, 8, 15, 22, ___, ___
        </Text>
      </Box>
    </Flex>
  );
};

export default Questions;
