import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import QuizItem from '../components/quiz-item';
import { Container } from '../components/common-styles';

const QuizWrapper = styled.div`
  padding: 2rem 0;
  h3 {
    margin-top: 2.5rem;
  }
`;

const QuizList = ({ posts, url }) => {
  return (
    <QuizWrapper>
      <Container>
        {posts.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.quizSlug;
          return (
            <QuizItem
              index={index}
              key={node.fields.quizSlug}
              title={title}
              slug={node.fields.quizSlug}
              body={node.body}
              url={url}
            />
          );
        })}
      </Container>
    </QuizWrapper>
  );
};

QuizList.propTypes = {
  posts: PropTypes.any,
};

export default QuizList;
