import React from 'react';
import SEO from '../components/seo';
import {
  List,
  ListItem,
  ListIcon,
  Flex,
  Box,
  Text,
  Alert,
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
            Question 1: Find the missing number in the sequence
          </Heading>
          <Text fontSize="20px" mt={3}>
            3, 6, __, 12, 15, __, 21
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            Question 2: Improve English
          </Heading>
          <Text fontSize="20px" mt={3}>
            Create 3 separate sentences using word "<strong>tennis</strong>"
          </Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            Question 3: Improve Listening and Speaking skills
          </Heading>
          <Text fontSize="20px" mt={3}>
            Find 3 news headlines from today. Talk about it for 10 mins as a
            video.
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
