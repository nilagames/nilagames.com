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
      <SEO title="Home" keywords={['Kids tasks', 'Learning habits for kids']} />

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
            1: Make sentence using words
          </Heading>
          <Text fontSize="20px" mt={2}>
            Q 1: Create a question using word 'How'?
          </Text>
          <Text fontSize="20px" mt={2}>
            Q 2: Create a sentence using word 'online'?
          </Text>
          <Text fontSize="20px" mt={2}>
            Q 3: Make a sentence using word 'lemon'?
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px">
            2: Math puzzle
          </Heading>
          <Text fontSize="20px" mt={3}>
            The cold faucet in my bath lets the water in at the rate of 15
            litres per minute.
            <br />
            The hot faucet fills the bath at the rate of 10 liters per minute.
            <br />
            The plug hole lets the water out of the bath at the rate of 12
            liters per minute.
            <br />
            <br />
            The bath holds a maximum of 520 liters.
            <br />
            <br />I turn both faucets on, but forget to put the plug in. How
            many minutes does it take for the bath to overflow?
          </Text>
        </Box>
        <Box my={3} p={6} bg="purple.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Logical puzzle
          </Heading>
          <Text fontSize="20px" mt={3}>
            A farmer wants to cross a river and take with him a wolf, a goat,
            and a cabbage.
            <br />
            There is a boat that can fit himself plus either the wolf, the goat,
            or the cabbage.
            <br />
            If the wolf and the goat are alone on one shore, the wolf will eat
            the goat. If the goat and the cabbage are alone on the shore, the
            goat will eat the cabbage.
            <br />
            How can the farmer bring the wolf, the goat, and the cabbage across
            the river?
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
