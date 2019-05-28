import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import ContributeBanner from "../components/documentation/ContributeBanner";
import Layout from "../components/layout";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";
import PropsTable from "../components/propstable";

// force top-level navigation to be a certain order
//const forcedNavOrder = ["/getting-started", "/guides"];

// Add an item node in the tree, at the right position
function addToTree(treeNodes, node) {
  let pushed = false;
  // Check if the item node should inserted in a subnode
  treeNodes.forEach(treeNode => {
    // "/store/travel".indexOf( '/store/' )
    if (node.link.indexOf(treeNode.link + "/") === 0) {
      treeNode.items = treeNode.items || [];
      pushed = true;
      addToTree(treeNode.items, node);
    }
  });

  if (!pushed) {
    // Item node was not added to a subnode, so it's a sibling of these treeNodes
    treeNodes.push({
      title: node.title,
      link: node.link
    });
  }

  return treeNodes;
}

/**
 * create the tree for navigation items. looks like this, where items
 * is the same as the item shown. link and items are optional
 *
 * [{
 *   title: 'Some Title',
 *   link: '/maybe/some/link',
 *   items: [...]
 * }]
 */
function createTree(nodes) {
  // algo depends on shorter URLs being first in the list
  return nodes
    .sort((a, b) => a.link.split("/").length - b.link.split("/").length)
    .reduce(addToTree, []);
}

const reduceNavTwo = allMdx => {
  const edges = allMdx.edges
    .filter(({ node }) => node.fields.slug !== "/")
    .map(({ node }) => ({
      title: node.frontmatter.title,
      link: node.fields.slug
    }));
  return createTree(edges).sort((a, b) => {
    const aScore = a.items ? a.items.length : 0;
    const bScore = b.items ? b.items.length : 0;
    return bScore - aScore;
  });
};

const RawLayout = props => <div>{props.children}</div>;

class DocLayout extends React.Component {
  render() {
    const { children, data, tableOfContents, ...props } = this.props;

    if (props.location.pathname === "/") {
      return <RawLayout {...props}>{children}</RawLayout>;
    } else {
      if (typeof data === "undefined") {
        return <div>Could not build page </div>;
      }

      const itemList = reduceNavTwo(data.allMdx);

      return (
        <Layout {...props} itemList={itemList}>
          {console.log("Data: ", data)}
          <Helmet />
          <div className="content">
            {children}

            <MDXRenderer tableOfContents={tableOfContents}>
              {data.mdx.code.body}
            </MDXRenderer>

            {data.mdx.frontmatter.type === "documentation" &&
            typeof data.componentMetadata !== "undefined" &&
            data.componentMetadata !== null ? (
              <div>
                <h2 style={{ marginTop: "2rem" }}>Props:</h2>
                <PropsTable
                  propMetaData={data.componentMetadata.childrenComponentProp}
                />
              </div>
            ) : null}
          </div>
        </Layout>
      );
    }
  }
}

export default DocLayout;

export const pageQuery = graphql`
  query($id: String, $componentName: String) {
    site {
      siteMetadata {
        docsLocation
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
            componentName
            navigation
            type
          }
          fields {
            slug
          }
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      tableOfContents
      frontmatter {
        title
        navigation
        componentName
        type
      }
    }
    componentMetadata(displayName: { eq: $componentName }) {
      id
      displayName
      docblock
      doclets
      childrenComponentProp {
        name
        docblock
        required
        parentType {
          name
        }
        type {
          value
        }
        defaultValue {
          value
          computed
        }
      }
      composes
    }
  }
`;
