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
            1: Addition numbers and images
          </Heading>
          <Box mt={3}>
            <Image
              src="https://www.myteachingstation.com/vault/2599/web/articles/Add-One-More-CupCake-Addition.jpg"
              alt="addition"
            />
            <Text my={3}>Fill the boxes</Text>
          </Box>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            2: Addition numbers
          </Heading>
          <Box mt={3}>
            <Image
              src="data:image/png;base64,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"
              alt="addition-numbers"
            />
          </Box>
          <Text my={3}>Learn addition numbers</Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Phonics Words
          </Heading>
          <Box mt={3}>
            <Image
              src="https://lh4.googleusercontent.com/I0Mb6e-FkpVNryAmCzreDnyGG90LALD1tfMwL5eYI5XKdhxj7t9Zv_EybpKURgiDgncbYAuynxEMLUbYu_6lelm-66tHxefByuzqiCE_PbEY5QQ7G4UfUwVQUl8mp_z6_Q=s412"
              alt="phonics-words"
            />
            <Text my={3}>Match the right words</Text>
          </Box>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            4: Numbers
          </Heading>
          <Box mt={3}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNzysOHxGZ56Mwalqm3Ee8fakpoCThli3Mwtm7mTnzRo0x6R0e&usqp=CAU"
              alt="numbers"
            />
            <Text my={3}>Fill the numbers</Text>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default PreschoolPage;
