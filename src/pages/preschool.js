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

const PreschoolPage = () => {
  return (
    <Layout>
      <SEO
        title="Preschool"
        keywords={['Preschool worksheet', 'Preschool worksheet']}
      />

      <Flex
        maxW="720px"
        mx="auto"
        my={6}
        px={6}
        flexDirection="column"
        justifyContent="center"
      >
        <Heading as="h2" my={6} textAlign="center">
          Questions for preschool kids
        </Heading>
        <Box my={3} p={6} bg="purple.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            1: Addition
          </Heading>
          <Box mt={3}>
            <Image
              src="https://cdn.education.com/worksheet-image/126202/addition-circus-math-kindergarten.png"
              alt="circus-addition"
            />
            <Text>Fill the boxes</Text>
          </Box>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            2: Phonics & Spelling - Letter A
          </Heading>
          <Box mt={3}>
            <Image
              src="https://cdn.education.com/worksheet-image/127421/beginning-reading-letter-the-alphabet.png"
              alt="phonics"
            />
          </Box>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Counting Numbers
          </Heading>
          <Box mt={3}>
            <Image
              src="https://cdn.education.com/worksheet-image/125139/number-sentence-superstar-addition-first.png"
              alt="counting-numbers"
            />
            <Text>Fill the boxes</Text>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default PreschoolPage;
