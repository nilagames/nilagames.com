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
            1: Reading the story
          </Heading>
          <Text fontSize="20px" mt={3}>
            The lemon is a small tree that is green even in the winter. It came
            from Asia, and is also the name of the tree's oval-shaped yellow
            fruit. The fruit is used for cooking and other things in the world –
            usually for its juice. People do not know for sure where lemons have
            come from. However, most people think that lemons first grew in
            India, northern Burma, and China. The lemon is the common name for
            Citrus limon. A lemon is a yellow citrus fruit. It is related to the
            orange. Lemon juice is about 5% citric acid, and has a pH of 2 to 3.
            Lemon plants vary in size yet stay generally small. The tallest
            height they can get is about 6 meters tall. Lemons taste sour. The
            juice, zest, and pulp are often used in cooking, often on fish and
            other meat for better taste. Lemon is also used to flavour drinks,
            such as lemonade or soft drinks.
          </Text>
          <Text fontSize="20px" mt={2}>
            Q 1: How tall lemon can grow?
          </Text>
          <Text fontSize="20px" mt={2}>
            Q 2: What is the taste of lemon?
          </Text>
          <Text fontSize="20px" mt={2}>
            Q 2: What is the color of lemon tree during winter?
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px">
            2: Math puzzle
          </Heading>
          <Text fontSize="20px" mt={3}>
            In a class of 60 students, 40 students like math, 36 like science,
            24 like both the subjects. Find the number of students who like
            <br />
            (i) Math only, (ii) Science only (iii) Either Math or Science (iv)
            Neither Math nor science.
          </Text>
          <Text mb={2}>Q 1: Find how many had taken one course only</Text>
        </Box>
        <Box my={3} p={6} bg="purple.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Solve the math
          </Heading>
          <Text fontSize="20px" mt={3}>
            Nila, Afrin and Nishanth bought 3 litres of milk. The decided to
            split the milk in ratio 4:1:3.
          </Text>
          <Text fontSize="20px" mb={2}>
            Q 1: How much milk each one get?
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
