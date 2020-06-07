import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Box, Text, Flex, Button } from '@chakra-ui/core';
import { QuizContext } from '../contexts/QuizContext';
import { UrlContext } from '../contexts/UrlContext';

const FooterContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: background-color 200ms linear;
`;

const Feedback = styled(Box)`
  color: black;
  font-size: 2rem;
`;

const text = {
  answerButton: {
    answer: 'Answer',
    continue: 'Continue',
    end: 'End the quiz',
  },
  feedback: {
    correct: 'Correct!',
    incorrect: 'Nope...',
  },
};

const QuizFooter = ({ next }) => {
  const { selected, answered, setAnswered, correct, incorrect } = useContext(
    QuizContext
  );
  const { url } = useContext(UrlContext);
  const handleSubmit = () => {
    if (correct) {
      setAnswered(!answered);
    } else {
      setAnswered(!answered);
    }
  };
  return (
    <FooterContainer
      bg={
        answered && correct
          ? 'green.300'
          : answered && !incorrect
          ? 'red.300'
          : 'white'
      }
    >
      <Flex
        maxW={['auto', '600px']}
        m="0 auto"
        minH={['auto', '150px']}
        justifyContent="center"
        alignItems="center"
        p={6}
      >
        {!answered && <Feedback />}
        {answered && correct && (
          <Feedback>
            <Text color="green.800">{text.feedback.correct}</Text>
          </Feedback>
        )}
        {answered && !correct && (
          <Feedback>
            <Text color="red.800">{text.feedback.incorrect}</Text>
          </Feedback>
        )}
        <Box ml="auto" alignSelf="center">
          {!answered ? (
            <Button
              variantColor="pink"
              fontSize="0.8rem"
              lineHeight="1"
              textTransform="uppercase"
              size="lg"
              disabled={selected === '' ? true : false}
              onClick={handleSubmit}
            >
              {text.answerButton.answer}
            </Button>
          ) : answered && next ? (
            <Link to={next}>
              <Button
                variantColor={correct ? 'green' : 'red'}
                fontSize="0.8rem"
                lineHeight="1"
                textTransform="uppercase"
                size="lg"
              >
                {text.answerButton.continue}
              </Button>
            </Link>
          ) : null}
          <Link to={url}>
            <Button
              ml={2}
              variant="outline"
              variantColor={
                answered && correct
                  ? 'green'
                  : answered && !correct
                  ? 'red'
                  : 'pink'
              }
              fontSize="0.8rem"
              lineHeight="1"
              textTransform="uppercase"
              size="lg"
            >
              {text.answerButton.end}
            </Button>
          </Link>
        </Box>
      </Flex>
    </FooterContainer>
  );
};

export default QuizFooter;
