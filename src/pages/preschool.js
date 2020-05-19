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
              src="https://2.bp.blogspot.com/-PmsDnycgfw0/VQlrtB0wbaI/AAAAAAAAYTE/DPwAvJBt2B0/s1600/Addition-2.gif"
              alt="circus-addition"
            />
            <Text>Fill the boxes</Text>
          </Box>
        </Box>
        <Box my={3} p={6} bg="green.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            2: Phonics
          </Heading>
          <Box mt={3}>
            <Image
              src="https://www.kindergartenworksheets.net/images/worksheets/phonics/printable-phonics-worksheets-printout.png"
              alt="phonics"
            />
          </Box>
          <Text>Learn the words</Text>
        </Box>
        <Box my={3} p={6} bg="blue.100" borderRadius="4px">
          <Heading as="h2" fontSize="24px" textTransform="uppercase">
            3: Addition facts
          </Heading>
          <Box mt={3}>
            <Image
              src="https://www.math-salamanders.com/image-files/addition-facts-worksheet-sentences-to-10-1.gif"
              alt="counting-numbers"
            />
            <Text>Select the right one</Text>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default PreschoolPage;
