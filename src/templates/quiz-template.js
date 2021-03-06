import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Box, Flex, Heading, Text, Alert, AlertIcon } from '@chakra-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import LogoText from '../components/logo-text';
import { QuizContextProvider } from '../contexts/QuizContext';
import MCQ from '../components/mcq';
import CloseButton from '../components/close-button';
import QuizFooter from '../components/quiz-footer';
import SEO from '../components/seo';

const Container = styled(Box)`
  max-width: 960px;
  margin: 0 auto;
`;

const QuizFooterContainer = styled(Box)`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledHeader = styled(Flex)`
  max-width: 960px;
  margin: 0 auto;
`;

const QuizTemplate = ({ data, pageContext }) => {
  const { body } = data.mdx;
  const { answers, title } = data.mdx.frontmatter;
  const { prev, next } = pageContext;

  return (
    <>
      <SEO title="Quiz" keywords={['Quiz for kids', 'Daily habits for kids']} />
      <StyledHeader
        as="header"
        w="100%"
        bg="white"
        minH="80px"
        px={5}
        alignItems="center"
      >
        <Box>
          <LogoText />
        </Box>
        <Box ml="auto">
          <CloseButton />
        </Box>
      </StyledHeader>
      <Box bg="gray.50" minH="calc(100vh)">
        <Container py="100px">
          <Flex alignItems="center" flexDirection="column" p={6}>
            <Box w="100%" maxW="720px" marginBottom={['0', '200px']}>
              <QuizContextProvider>
                <Heading
                  as="h3"
                  mb={6}
                  fontSize={{ base: '3xl', md: '4xl' }}
                  color="gray.900"
                >
                  {title}
                </Heading>
                <Text fontSize="20px" my="40px" as="section">
                  <MDXRenderer>{body}</MDXRenderer>
                </Text>
                {answers ? (
                  <>
                    <MCQ
                      answers={answers}
                      next={next && next.fields.quizSlug}
                      prev={prev && prev.fields.quizSlug}
                    />
                    <QuizFooterContainer>
                      <QuizFooter next={next && next.fields.quizSlug} />
                    </QuizFooterContainer>
                  </>
                ) : (
                  <>
                    <Alert status="info" variant="left-accent">
                      <AlertIcon />
                      Open questions doesn't have choices. There is no one
                      correct answers for such questions. It is more for
                      practicing your skills.
                    </Alert>
                  </>
                )}
              </QuizContextProvider>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export const query = graphql`
  query QuestionByquizSlug($quizSlug: String!) {
    mdx(fields: { quizSlug: { eq: $quizSlug } }) {
      frontmatter {
        title
        answers {
          value
          correct
        }
      }
      body
      fields {
        quizSlug
      }
    }
  }
`;

export default QuizTemplate;
