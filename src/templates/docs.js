import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import PropsTable from "../components/propstable";
import { Box, Heading, Text } from "rimble-ui";

const RawLayout = props => <div>{props.children}</div>;

class DocLayout extends React.Component {
  render() {
    const { children, data, tableOfContents, ...props } = this.props;

    if (props.location.pathname === "/") {
      return <RawLayout {...props}>{children}</RawLayout>;
    } else {
      if (typeof data === "undefined") {
        return <Text>Could not build page </Text>;
      }

      return (
        <Layout {...props}>
          {console.log("Data: ", data)}
          <Helmet />
          <Box>
            {typeof data.componentMetadata !== "undefined" &&
            data.componentMetadata !== null ? (
              <MDXRenderer
                tableOfContents={data.componentMetadata.tableOfContents}
                propMetaData={data.componentMetadata.childrenComponentProp}
                {...props}
              >
                {data.mdx.code.body}
              </MDXRenderer>
            ) : (
              <MDXRenderer tableOfContents={tableOfContents} {...props}>
                {data.mdx.code.body}
              </MDXRenderer>
            )}
          </Box>
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
