const pageQuery = `{
    pages: allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`;
const flatten = arr =>
  arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
    ...frontmatter,
    ...fields,
    ...rest
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `Pages`,
    settings
  }
];
module.exports = queries;
