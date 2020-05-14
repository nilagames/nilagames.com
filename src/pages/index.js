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
              Train running at a speed of 60 KM per hour. There are three stops
              between starting point and destination.
              <br />
              First stop is at 30 KM
              <br />
              Second stop is at 45 KM
              <br />
              Third stop is at 72 KM
              <br />
            </Text>
            <Text>
              Q 1: How long does it takes for the train to reach 1st, 2nd and
              3rd stop?
            </Text>
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            2: Speak about today's news for 10 mins
          </Heading>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Logical Puzzle
          </Heading>
          <Box mt={3}>
            <Image
              src="https://1.bp.blogspot.com/-SHl5U4FPMAU/Xq15aQlhnvI/AAAAAAAAgPg/DLUDXJoB19w8ZrXZSvxHzdRCeLEU3SDRACLcBGAsYHQ/s1600/Juice%2BSandwich%2BMango%2BEquation%2BPuzzle.png"
              alt="number-puzzle"
            />
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
