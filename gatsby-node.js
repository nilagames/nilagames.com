const path = require('path');
const _ = require(`lodash`);
const parsePath = require('parse-filepath');
const { createFilePath } = require('gatsby-source-filesystem');

const slugify = (str) => _.kebabCase(str.toLowerCase());

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    const filePath = parsePath(parent.relativePath);
    const group = filePath.dir;
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `quizSlug`,
      node,
      value,
    });

    createNodeField({
      name: `quiz`,
      node,
      value: group,
    });
  }
};

const createQuizPages = (createPage, posts, url, tag) => {
  const quizListTemplate = path.resolve(
    `./src/templates/quiz-list-template.js`
  );

  const postsPerPage = 4; // This number decides the pagination
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${url}` : `/${url}/${i + 1}`,
      component: quizListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        url,
        tag,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: fields___quiz) {
          fieldValue
          totalCount
          edges {
            node {
              fields {
                quiz
                quizSlug
              }
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
          edges {
            node {
              fields {
                quiz
                quizSlug
              }
            }
          }
        }
      }
    }
  `);

  const { group } = result.data.allMdx;

  group.forEach((exercise) => {
    exercise.edges.forEach((edge, index) => {
      const next =
        index === exercise.edges.length - 1
          ? null
          : exercise.edges[index + 1].node;
      const prev = index === 0 ? null : exercise.edges[index - 1].node;

      createPage({
        path: edge.node.fields.quizSlug,
        component: require.resolve(`./src/templates/quiz-template.js`),
        context: {
          quizSlug: edge.node.fields.quizSlug,
          next,
          prev,
        },
      });
    });
  });

  // Tags Page
  const tags = result.data.tagsGroup.group;
  tags.forEach((tag) => {
    const tagValue = tag.fieldValue;
    const url = slugify(tag.fieldValue);
    createQuizPages(createPage, tag.edges, url, tagValue);
  });
};
