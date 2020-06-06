import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Heading, Text, Box, Button } from '@chakra-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Link from './quiz-link';

const QuizPostContainer = styled(Box)`
  padding: 2rem 4rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px,
    rgba(71, 63, 79, 0.16) 0px 8px 24px;
  &:hover {
    transform: translateY(-4px);
  }
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

const QuizItem = ({ title, slug, body, url, index }) => {
  const colors = ['purple.100', 'gray.100', 'orange.100', 'green.100'];

  return (
    <QuizPostContainer bg={colors[index % 3]}>
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
          variantColor="red"
          lineHeight="1"
          textTransform="uppercase"
          borderRadius="20px"
          my={2}
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
