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
            1: Math challenge
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text>
              Nila have 200 rupees. It grows 20% every year. What will be the
              money nila have after 3 years?
            </Text>
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            2: Read and answer
          </Heading>
          <Text>
            Food shortage is still a big problem in the world today. Many people
            do not have enough money to buy the food that they need. Bad weather
            or other problems sometimes destroy the growing food in one part of
            the world. When people do not have enough food, we say that they are
            hungry. If they do not eat enough food for a long time, they will
            become sick and die from starvation. In areas where many people do
            not have enough food, we say that there is famine there. Food and
            water can make people sick if it is contaminated by microorganisms,
            bad metals, or chemicals. If people do not eat the right foods, they
            can become sick. If people do not eat enough protein, they get the
            disease called kwashiorkor. If they do not eat enough vitamin B1
            (thiamine), they get the disease called beriberi. If they do not eat
            enough vitamin C, they get the disease called scurvy. If children do
            not eat enough vitamin D, they get the disease called rickets. If
            people eat too much food, they can become overweight or obese. This
            is also bad for people's health.
          </Text>
          <br />
          <Text>Q 1: When do people become sick?</Text>
          <br />
          <Text>
            Q 2: What disease people get if they don't eat enough Vitamin C?
          </Text>
          <br />
          <Text>
            Q 3: What is the meaning for?
            <br />
            1. Starvation
            <br />
            2. Hungry
            <br />
            3. Obese
            <br />
            4. Famine
            <br />
          </Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Logical Puzzle
          </Heading>
          <Box mt={3}>
            <Image
              src="https://www.homeschoolmath.net/online/images/number-puzzle-example.gif"
              alt="number-puzzle"
            />
            <Text>Fill the boxes</Text>
          </Box>
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
