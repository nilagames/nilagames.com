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
            1: Math challenge
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text>
              Afrin goes to market. She buys 2Kg tomato, 3Kg potato 250g beans,
              and 500g carrot.
            </Text>
            <br />
            <Text>Kg - Kilogram, g - grams, Rs - Rupees</Text>
            <br />
            <Text>
              Price List:
              <br />
              1Kg tomato - Rs. 12 <br />
              1Kg potato - Rs. 8 <br />
              1Kg beans - Rs. 40 <br />
              1Kg carrot - Rs> 24
              <br />
            </Text>
            <br />
            <Text>Q 1: How much did Afrin spend in the market?</Text>
            <Text>
              Q 2: Afrin gave 100 rupees to the shopkeeper. How much money she
              got back?
            </Text>
          </Text>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            2: Read and Answer
          </Heading>
          <Text fontSize="20px" mt={3}>
            Burj Khalifa or "Khalifa Tower" is a very tall skyscraper in Dubai,
            United Arab Emirates. It is the world's tallest building ever built,
            at 828m (2,717ft). Before the building opened, it was called Burj
            Dubai. The building is 160 stories high. Construction of the tower
            was started in 2004. The building was officially opened on 4 January
            2010. It is the tallest structure made by humans in the world. The
            building is more than 300 metres (980 ft) taller than Taipei 101.
            Taipei 101 was the tallest building until 2010 before Burj Khalifa
            was built. But the Burj Khalifa may not hold this record for very
            long because an even taller building called the Jeddah Tower is
            being built in Jeddah in Saudi Arabia and it will be taller than 1
            kilometer.
          </Text>
          <br />
          <Text>Q 1: Where is burj Khalifa?</Text>
          <br />
          <Text>Q 2: Where is Jeddah tower built?</Text>
          <br />
          <Text>Q 3: What is the height of Burj Khalifa?</Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Read about Library
          </Heading>
          <Text fontSize="20px" mt={3}>
            <Text>Talk about library for 10 mins in Tamil and English</Text>
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
