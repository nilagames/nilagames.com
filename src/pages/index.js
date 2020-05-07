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
            1. Read the story and explain it
          </Heading>
          <Text as="p" fontSize="20px" mt={3}>
            <strong>The Farmer and the Snake</strong>
          </Text>
          <Text fontSize="20px" mt={3}>
            A Farmer walked through his field one cold winter morning. On the
            ground lay a Snake, stiff and frozen with the cold. The Farmer knew
            how deadly the Snake could be, and yet he picked it up and put it in
            his bosom to warm it back to life. The Snake soon revived, and when
            it had enough strength, bit the man who had been so kind to it. The
            bite was deadly and the Farmer felt that he must die. As he drew his
            last breath, he said to those standing around, “Learn from my fate
            not to take pity on a scoundrel”.
          </Text>
          <Text fontSize="20px" mt={3}>
            Moral: There are some who never changes their nature, regardless of
            how good we behave with them. Always stay alert and maintain the
            distance from those who are there only thinking about their own
            benefits.
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            2: Word sequence - Find the missing words
          </Heading>
          <Text fontSize="20px" mt={3}>
            A, F, C, H, E, __, __
          </Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Maths Challenge
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text>
              A restaurant have 4 workers. 2 workers earn 10000 per month. 2
              workers earn 8000 per month. The restaturant's monthly sales is
              50000. And restaurant spend 12000 per month for operation cost.
            </Text>
            <br />
            <Text>
              Q 1: How much is the profit for the restaurant on a month?
            </Text>
            <br />
            <Text>
              Q 2: How many salary paid to the employees in a month by the
              restaurant?
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
