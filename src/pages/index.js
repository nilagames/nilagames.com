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
            Q 1: Create a question using word 'When'?
          </Text>
          <Text fontSize="20px" mt={2}>
            Q 2: Create a question using word 'When'?
          </Text>
          <Text fontSize="20px" mt={2}>
            Q 3: Make a sentence using word 'recipe'?
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px">
            2: Math puzzle
          </Heading>
          <Text fontSize="20px" mt={3}>
            I have ten boxes, with a total weight of 75kg:
            <br />
            15 kg, 13 kg, 11 kg, 10 kg, 9 kg, 8 kg, 4 kg, 2 kg, 2 kg, 1 kg
            <br />
            I want to pack the boxes into 3 crates, but each crate can carry a
            maximum of 25 kg.
            <br />
            How can I pack the boxes into the crates?
            <br />
            (There may, or may not, be more than one way!)
          </Text>
        </Box>
        <Box my={3} p={6} bg="purple.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Logical puzzle
          </Heading>
          <Text fontSize="20px" mt={3}>
            For a dinner party, Abraham is creating individual servings of
            starters. He has 9 carrot sticks and 18 celery sticks. If he wants
            each serving to be identical, with no food left over, what is the
            greatest number of servings Abraham can create?
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
