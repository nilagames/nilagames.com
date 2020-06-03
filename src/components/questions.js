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
          1: Logical puzzle
        </Heading>
        <Text fontSize="20px" mt={3}>
          When asked about his birthday, a man said: "The day before yesterday I
          was only 25 and next year I will turn 28." This is true only one day
          in a year - when was he born?
        </Text>
      </Box>
      <Box my={3} p={6} bg="green.100" borderRadius="4px">
        <Heading as="h2" fontSize="24px">
          2: Solve the Math
        </Heading>
        <Text fontSize="20px" mt={3}>
          A train 280 m long crosses the bridge 170 m in 22.5 seconds. Find the
          speed of the train in km/hr
        </Text>
      </Box>
      <Box my={3} p={6} bg="purple.100" borderRadius="4px">
        <Heading as="h2" fontSize="24px" textTransform="uppercase">
          3: Logical puzzle
        </Heading>
        <Text fontSize="20px" mt={3}>
          The sum of the incomes of Abha and Bhabha is more than that of Cabha
          and Dhaba together. The sum of the Incomes of Abha and Cabha is the
          same as that of Bhaba and Dhaba taken together. Moreover, Abha earns
          half as much as the sum of the incomes of Bhaba and Dhaba? Whose
          income is the highest?
        </Text>
      </Box>
      <Box my={3} p={6} bg="orange.100" borderRadius="4px">
        <Heading as="h2" fontSize="24px" textTransform="uppercase">
          3: Read and answer
        </Heading>
        <Text fontSize="20px" mt={3}>
          John liked chocolates very much, but his mother never gave him any,
          because they were bad for his teeth, she thought. But John had a very
          nice grandfather. The old man loved his grandson very much, and
          sometimes he brought John chocolates when he came to visit him. Then
          his mother let him eat them, because she wanted to make the old man
          happy. One evening, a few days before John’s seventh birthday, he was
          saying his prayers in his bedroom before he went to bed. "Please, God"
          he shouted, "make them give me a big box of chocolates for my birthday
          on Saturday". His mother was in the kitchen and she heard the small
          boy shouting and went into his bedroom quickly. "Why are you shouting,
          John?" she asked her son, "God can hear you when you talk quietly" ​
          "I know" answer the clever boy with a smile, "but Grandfather's in the
          next room, and he can't".
        </Text>
        <Text fontSize="20px" mt={6}>
          <strong>Q 1:</strong> Why did his grandfather sometimes give him
          chocolate?
        </Text>
        <Text fontSize="20px" mt={3}>
          <strong>Q 2:</strong> Why did his mother let John eat the chocolate he
          got from his grandfarther?
        </Text>
        <Text fontSize="20px" mt={3}>
          <strong>Q 3:</strong> What did he pray to God before his seventh
          birthday?
        </Text>
        <Text fontSize="20px" mt={3}>
          <strong>Q 4:</strong> Why did he shout when he was praying?
        </Text>
      </Box>
    </Flex>
  );
};

export default Questions;
