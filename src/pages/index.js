import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Hero, { HeroWithImage } from '../components/hero';
import { HeroImage, SayHiImage } from '../components/images';
import Questions from '../components/questions';

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
            HeroImage={HeroImage}
            hasButton={true}
            buttonText="Get started"
            buttonLink="/"
          />
        </Container>
      </Box>
      <Box>
        <Questions />
      </Box>
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
