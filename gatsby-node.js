const path = require("path");
const startCase = require("lodash.startcase");
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: { $components: path.resolve(__dirname, "src/components") }
    }
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-export-default-from"
  });
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-do-expressions"
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx` && node.frontmatter.title !== "") {
    // console.log("onCreateNode:", node);

    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, "");

    if (value === "index") {
      value = "";
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`
    });

    createNodeField({
      name: "id",
      node,
      value: node.id
    });

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || startCase(parent.name)
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const docTemplate = path.resolve(`./src/templates/docs.js`);
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    componentName
                  }
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                  }
                  internal {
                    type
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log("Errors: ", result.errors);
          reject(result.errors);
        }
        // Create blog posts pages.
        result.data.allMdx.edges.forEach(async ({ node }) => {
          console.log("title: ", node.frontmatter.title);
          if (
            typeof node.fields !== "undefined" &&
            node.fields !== null &&
            typeof node.internal !== "undefined" &&
            node.internal.type === `Mdx` &&
            typeof node.frontmatter !== "undefined" &&
            typeof node.frontmatter.componentName !== "undefined"
          ) {
            createPage({
              path: `${node.fields.slug}`,
              component: docTemplate,
              context: {
                id: node.id,
                componentName: node.frontmatter.componentName
              }
            });
          }
        });
      })
    );
  });
};
