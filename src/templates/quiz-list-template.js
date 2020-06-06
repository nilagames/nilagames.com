import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Box } from '@chakra-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import QuizList from '../components/quiz-list';
import { Container, ButtonLink } from '../components/common-styles';

const StyledQuizContainer = styled(Box)`
  min-height: calc(100vh - 210px);
`;

const PrevNextPageContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const PrevNextItem = styled.div`
  margin-bottom: 3rem;
  display: flex;
  @media (max-width: 575.98px) {
    margin-bottom: 2rem;
  }
`;

class QuizListTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;
    const {
      currentPage = 1,
      numPages = 1,
      url: urlPath,
      tag,
    } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;

    const prevPage =
      currentPage - 1 === 1
        ? `/${urlPath}`
        : `/${urlPath}/${(currentPage - 1).toString()}`;
    const nextPage = `/${urlPath}/${(currentPage + 1).toString()}`;
    const pageUrl =
      currentPage - 1 === 0
        ? `/${urlPath}`
        : `/${urlPath}/${currentPage.toString()}`;

    return (
      <Layout>
        <SEO
          title={tag || 'Quiz page'}
          keywords={['Quiz for kids', 'Daily habits for kids']}
        />
        <StyledQuizContainer bg="gray.50" py={6}>
          <QuizList posts={posts} url={pageUrl} />
          <Container>
            <PrevNextPageContainer>
              <PrevNextItem>
                {!isFirst && (
                  <ButtonLink to={prevPage} rel="prev">
                    ← Previous Page
                  </ButtonLink>
                )}
              </PrevNextItem>
              <PrevNextItem>
                {!isLast && (
                  <ButtonLink to={nextPage} rel="next">
                    Next Page →
                  </ButtonLink>
                )}
              </PrevNextItem>
            </PrevNextPageContainer>
          </Container>
        </StyledQuizContainer>
      </Layout>
    );
  }
}

export default QuizListTemplate;

export const pageQuery = graphql`
  query QuizListQuery($skip: Int!, $limit: Int!, $tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          body
          fields {
            quizSlug
          }
        }
      }
    }
  }
`;
