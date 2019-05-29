import React, { Component } from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";

import Layout from "../components/layout";
import PropsTable from "../components/propstable";

export default class MDXRuntimeTest extends Component {
  render() {
    const { children, data, tableOfContents } = this.props;
    return (
      <MDXProvider>
        {/* <Layout> */}
        <div className="content">
          {children}
          {console.log("Data: ", data)}
          <h1>{data.componentMetadata.displayName}</h1>
          <p>{data.componentMetadata.docblock}</p>
          <MDXRenderer tableOfContents={tableOfContents}>
            {data.mdx.code.body}
          </MDXRenderer>
          <h2 style={{ marginTop: "2rem" }}>Props:</h2>
          <PropsTable
            propMetaData={data.componentMetadata.childrenComponentProp}
          />
        </div>
        {/* </Layout> */}
      </MDXProvider>
    );
  }
}

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