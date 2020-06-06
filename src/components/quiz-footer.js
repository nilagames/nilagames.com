import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Box, Text, Flex } from '@chakra-ui/core';
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

// a button can't have a Link as a child
const ContinueButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 30px;
  padding: 0.7rem 2rem 0.7rem 2rem;
  margin: 1rem 0;
  cursor: pointer;
  color: black;
  text-decoration: none;
  border: 2px solid;
`;

// a div cannot have the disabled property
const AnswerButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 2rem 0.7rem 2rem;
  margin: 1rem 0;
  border: 2px solid;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 30px;
  background-color: white;
  cursor: pointer;
`;

const text = {
  answerButton: {
    answer: 'ANSWER',
    continue: 'CONTINUE',
    end: 'END',
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
        w="600px"
        m="0 auto"
        minH={['auto', '200px']}
        justifyContent="center"
        alignItems="center"
      >
        {!answered && <Feedback />}
        {answered && correct && (
          <Feedback color="green.600">
            <Text>{text.feedback.correct}</Text>
          </Feedback>
        )}
        {answered && !correct && (
          <Feedback color="red.600">
            <Text>{text.feedback.incorrect}</Text>
          </Feedback>
        )}
        <Box ml="auto" alignSelf="center">
          {!answered ? (
            <AnswerButton
              as="button"
              disabled={selected === '' ? true : false}
              onClick={handleSubmit}
            >
              {text.answerButton.answer}
            </AnswerButton>
          ) : answered && next ? (
            <ContinueButton as={Link} to={next}>
              {text.answerButton.continue}
            </ContinueButton>
          ) : (
            <ContinueButton as={Link} to={url}>
              {text.answerButton.end}
            </ContinueButton>
          )}
        </Box>
      </Flex>
    </FooterContainer>
  );
};

export default QuizFooter;
