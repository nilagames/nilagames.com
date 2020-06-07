import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Heading, Text, Box, Button } from '@chakra-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Link from './quiz-link';

const QuizPostContainer = styled(Box)`
  border-radius: 6px;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in;
  box-shadow: 0 16px 16px rgba(0, 0, 0, 0.1);
  @media (max-width: 575.98px) {
    padding: 1.5rem 1rem;
  }
  small {
    margin: 0;
    color: #828282;
    font-size: 0.9rem;
  }
  .sep {
    margin: 0 0.25rem;
  }
`;

const QuizItem = ({ title, slug, body, url }) => {
  return (
    <QuizPostContainer bg="gray.50" p={6}>
      <Heading as="h2" fontSize="2xl" mb={3}>
        <Link to={slug} backTo={url}>
          {title}
        </Link>
      </Heading>
      <Text fontSize="lg" my={4} as="section">
        <MDXRenderer>{body}</MDXRenderer>
      </Text>
      <Link to={slug} backTo={url}>
        <Button
          variant="outline"
          variantColor="pink"
          lineHeight="1"
          textTransform="uppercase"
          my={2}
          size="sm"
        >
          Answer →
        </Button>
      </Link>
    </QuizPostContainer>
  );
};

QuizItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  body: PropTypes.any,
};

export default QuizItem;
