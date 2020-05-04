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
            Question 1: Improve english
          </Heading>
          <Text fontSize="20px" mt={3}>
            Write 3 words with letter <Text as="strong">"O"</Text> and create 1
            sentense for each word.
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            Question 2: Pattern problems
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text as="strong">If:</Text>
            <Text>2 + 2 = 44</Text>
            <Text>3 + 3 = 96 </Text>
            <Text>4 + 4 = 168 </Text>
            <Text>5 + 5 = 2510 </Text>
            <Text as="strong">Then: </Text>
            <Text>6 + 6 = ?</Text>
          </Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            Question 3: Solve the following
          </Heading>
          <Box mt={6}>
            <Image
              src="https://www.prodigygame.com/blog/wp-content/uploads/brain-teasers-games-for-kids.jpg"
              alt="brain teaser"
            />
          </Box>
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
