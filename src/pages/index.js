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
            1: Reading English
          </Heading>
          <Text fontSize="20px" mt={3}>
            A farmer is a very important person. He works all day in the fields,
            growing crops which we eat. Farmers are hardworking people. For a
            farmer, his land means everything. A farmer’s day begins early in
            the morning. They grow crops and sell it in the market. They also
            grow fruits and vegetables. They live in huts and mud houses. The
            farmer ploughs his land with a pair of oxen. Some use tractors to do
            the work faster. They water their fields regularly. His family also
            helps him. When it rains, the farmers rejoice because rains mean a
            good harvest. We must be grateful to the farmers.
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px">
            2: English sentence making
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text mb={2}>Q 1: Ask a question with word "do"</Text>
            <Text mb={2}>Q 2: Make a sentence using word "request"</Text>
            <Text mb={2}>Q 3: Ask a question using "what"</Text>
          </Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Math challenge
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text mb={2}>
              Nila orders 300ml (milli-litres) milk from Afrin on weekdays. On
              weekends, she orders 500ml milk from Afrin. 1 litre milk price is
              42 rupees.
            </Text>
            <Text mb={2}>
              Q 1: How much milk did nila ordered for 4 weeks? (answer in
              litres)
            </Text>
            <Text mb={2}>
              Q 2: How much money Nila has to give to Afrin after 4 weeks?
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
