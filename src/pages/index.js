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

      <Flex flexDirection="column" minH="400px" justifyContent="center">
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
        px={6}
        flexDirection="column"
        justifyContent="center"
      >
        <Box my={3} p={6} bg="red.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            Question 1: Simplify and find the answer for this math
          </Heading>
          <Text fontSize="20px" mt={3}>
            {`36 − [18 − (15 − 4 ÷ 2 × 2)]`} =
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            Question 2: Open science question
          </Heading>
          <Text fontSize="20px" mt={3}>
            About three-fourths of the earth's surface is covered with water.
            Why then is there a shortage of water?
          </Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            Question 3: Challenge
          </Heading>
          <Text fontSize="20px" mt={3}>
            The length of a cloth is 20 CM. You have 10 M wire for hanging those
            clothes.
            <Text>
              Q: What is the maximum number of clothes you can hang in the wire
              anytime?
            </Text>
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDirection="column"
        minH="400px"
        justifyContent="center"
        alignItems="center"
      >
        <Box my={6}>
          <List m={6}>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              Learning everyday is important.
            </ListItem>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              The process to find the answer is more important.
            </ListItem>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              No answer is perfect.
            </ListItem>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              If possible, record and share your answers everyday to youtube.
            </ListItem>
            <ListItem fontSize="24px" m={3}>
              <ListIcon icon="check-circle" color="green.300" />
              These questions helps to build a learning habit.
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
