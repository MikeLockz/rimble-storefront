import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/global/SEO";
import { graphql } from "gatsby";
// import Layout from "../components/layout";
import Layout from "./../components/documentation/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Box, Text } from "rimble-ui";

const RawLayout = props => <div>{props.children}</div>;

class DocLayout extends React.Component {
  render() {
    const { children, data, ...props } = this.props;

    const getComponentType = string => {
      const splitString = string.split("/");
      const componentType = splitString[2];
      return componentType;
    };

    if (props.location.pathname === "/") {
      return <RawLayout {...props}>{children}</RawLayout>;
    } else {
      if (typeof data === "undefined") {
        return <Text>Could not build page </Text>;
      }

      return (
        <Layout
          {...props}
          tableOfContents={data.mdx.tableOfContents}
          title={data.mdx.frontmatter.title}
          componentType={getComponentType(data.mdx.fields.slug)}
        >
          <SEO
            title={data.mdx.frontmatter.title}
            description={data.mdx.frontmatter.description}
            keywords={[`rimble`, `web3`, `blockchain`]}
            componentType={getComponentType(data.mdx.fields.slug)}
            image={`/images/${data.mdx.frontmatter.title}.png`}
          />
          <Helmet />
          <Box>
            {typeof data.componentMetadata !== "undefined" &&
            data.componentMetadata !== null ? (
              <MDXRenderer
                propMetaData={data.componentMetadata.childrenComponentProp}
                {...props}
              >
                {data.mdx.body}
              </MDXRenderer>
            ) : (
              <MDXRenderer {...props}>{data.mdx.body}</MDXRenderer>
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
    mdx(id: { eq: $id }) {
      id
      tableOfContents
      frontmatter {
        title
        componentName
        description
      }
      fields {
        slug
      }
      body
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
