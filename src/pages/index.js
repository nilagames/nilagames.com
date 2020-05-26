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
            1: Reading the story from URL
          </Heading>
          <Text fontSize="20px" mt={3}>
            <a
              target="_blank"
              href="https://www.bbc.co.uk/learningenglish/english/features/childrens-stories/therobot"
            >
              Read the story here
            </a>
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px">
            2: Math puzzle
          </Heading>
          <Text fontSize="20px" mt={3}>
            In a survey of university students, 64 had taken mathematics course,
            94 had taken chemistry course, 58 had taken physics course, 28 had
            taken mathematics and physics, 26 had taken mathematics and
            chemistry, 22 had taken chemistry and physics course, and 14 had
            taken all the three courses.
          </Text>
          <Text mb={2}>Q 1: Find how many had taken one course only</Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Math challenge
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text mb={2}>
              Amul icecream company polls its customers on their favorite
              flavor: chocolate or vanilla? 106 customers said they liked
              chocolate, 97 customer said they like vanilla, while 31 customers
              said they liked both chocolate and vanilla.
            </Text>
            <Text mb={2}>
              Q 1: How many customers said they like only chocolate?
            </Text>
            <Text mb={2}>
              Q 2: How many customers participated in the poll?
            </Text>
          </Text>
        </Box>
        <Box my={3} p={6} bg="purple.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            4: Solve it
          </Heading>
          <Text fontSize="20px" mt={3}>
            Nila and Afrin invest in a business in the ratio 3 : 2. If 5% of the
            total profit goes to charity and Nila's share is Rs. 855.
          </Text>
          <Text mb={2}>Q 1: What is the total profit?</Text>
          <Text mb={2}>Q 2: What is the Afrin's share?</Text>
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
