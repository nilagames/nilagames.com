import React from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Heading } from '@chakra-ui/core';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Card from '../components/card';
import Link from '../components/quiz-link';
import Hero, { HeroWithImage } from '../components/hero';
import {
  LearnImage,
  SayHiImage,
  SequenceImage,
  MathsImage,
  LogicalImage,
} from '../components/images';

const Container = styled(Box)`
  max-width: 960px;
  margin: 0 auto;
`;

const Page = (props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Home" keywords={['Quiz for kids', 'Daily habits for kids']} />
      <Box bg="gray.50">
        <Container py="50px">
          <HeroWithImage
            title="Create learning habits among kids"
            description="Nila asks 3 questions everyday to kids. Its helps them to learn different topics outside their book. Also helps them to build a daily learning habits."
            HeroImage={LearnImage}
            hasButton={true}
            buttonText="Get started"
            buttonLink="/"
          />
        </Container>
      </Box>
      <Container py="50px" px="20px">
        <Box textAlign="center">
          <Heading
            as="h3"
            mb={12}
            fontSize={{ base: '3xl', md: '4xl' }}
            color="gray.900"
          >
            Categories
          </Heading>
        </Box>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6}>
          <Link to="/numbers">
            <Card
              bg="yellow.100"
              title="Numbers"
              description="Learn basic operations on numbers"
            />
          </Link>
          <Link to="/math-puzzles">
            <Card
              bg="green.100"
              title="Solve the Math"
              description="Puzzles that teach you real world examples for mathematics"
            />
          </Link>
          <Link to="/logical-puzzles">
            <Card
              bg="red.100"
              title="Logical puzzles"
              description="Puzzles that examine your logical reasoning skills"
            />
          </Link>
          <Link to="/words">
            <Card
              bg="teal.100"
              title="Vocabulary"
              description="Make sentences using words and learn english"
            />
          </Link>
        </Grid>
      </Container>
      <Box bg="gray.50">
        <Container pt="100px" px="20px">
          <Hero
            title="Don't be shy, say hi!"
            description="If you have ideas to help the community or new courses, please share with us. We will get back to you in 5 business days."
            hasButton={true}
            buttonText="Get in touch"
            buttonLink="mailto:paramanantham@live.com"
            HeroImage={SayHiImage}
          />
        </Container>
      </Box>
    </Layout>
  );
};

export default Page;
