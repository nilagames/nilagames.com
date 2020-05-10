import React from 'react';
import SEO from '../components/seo';
import {
  List,
  ListItem,
  ListIcon,
  Flex,
  Box,
  Text,
  Image,
  Heading,
} from '@chakra-ui/core';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

      <Flex
        bg="green.50"
        flexDirection="column"
        minH="450px"
        justifyContent="center"
      >
        <Box p={4} maxW="600px" mx="auto" textAlign="center">
          <Heading as="h1" fontSize="36px" textTransform="uppercase">
            Building learning habits for kids
          </Heading>
          <Text as="p" fontSize="24px" my={6}>
            Nila asks 3 questions everyday to kids. Its helps them to learn
            different topics outside their book. Also helps them to build a
            daily learning habits.
          </Text>
        </Box>
      </Flex>

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
        <Box my={3} p={6} bg="purple.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            1: Find Average
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text>
              Vennila likes to bicycle everyday. In last one week, she bicycled,
              <br /> 2 KM on Sunday
              <br /> 4 KM on Monday
              <br /> 6 KM on Tuesday
              <br /> 1 KM on Wednesday
              <br /> 2 KM on Thursday
              <br /> 3 KM on Friday
              <br /> 4 KM on Saturday
            </Text>
            <br />
            <Text>
              Q 1: What is the average distance vennila travelled per day?
            </Text>
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            2: English sentenses - Fill in the blanks with suitable words
          </Heading>
          <Text fontSize="20px" mt={3}>
            Q 1: I _____ to learn english.
          </Text>
          <Text fontSize="20px" mt={3}>
            Q 2: Nishanth and Thaswin _____ brothers.
          </Text>
          <Text fontSize="20px" mt={3}>
            Q 3: She _____ singing.
          </Text>
          <Text fontSize="20px" mt={3}>
            Q 4: _____ is your birthday?
          </Text>
          <Text fontSize="20px" mt={3}>
            Q 5: _____ sugar do you need?
          </Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Maths Challenge
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text>
              Afrin watches cartoon everyday for last 30 days. Overall she
              watched 45 hours for those 30 days.
            </Text>
            <br />
            <Text>Q 1: How many hours she watched on an average per day?</Text>
            <br />
            <Text>
              Q 2: How many minutes she watched TV on an average per week?
            </Text>
          </Text>
        </Box>
      </Flex>

      <Flex
        bg="pink.50"
        flexDirection="column"
        minH="450px"
        justifyContent="center"
        alignItems="center"
      >
        <Box my={6}>
          <List m={6}>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              {` `}
              Learning everyday is important.
            </ListItem>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              {` `}
              The process to find the answer is more important.
            </ListItem>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              {` `}
              No answer is perfect.
            </ListItem>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              {` `}
              If possible, record and share your answers everyday to youtube.
            </ListItem>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              {` `}
              These questions helps to build a learning habit.
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
