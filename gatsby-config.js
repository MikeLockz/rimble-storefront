module.exports = {
  siteMetadata: {
    title: `Rimble - Better dApp UX`,
    description: `Rimble provides resources and tools for faster dApp development with better UX`,
    author: `@consensysdesign`,
    docsLocation: `https://github.com/ConsenSys/rimble-ui/issues`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rimble-storefront`,
        short_name: `rimble`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "post-toc-anchor"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: { default: require.resolve("./src/templates/docs.js") },
        remarkPlugins: [require("gatsby-transformer-remark")],
        gatsbyRemarkPlugins: [
          `gatsby-remark-katex`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "post-toc-anchor"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/src/pages/`
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rimble-ui`,
        path: `src/library/rimble-ui/src`,
        ignore: [
          `**/__snapshots__/**`,
          `**/*.test.js`,
          `**/*.snap`,
          `.eslint`,
          `*.js`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rimble-web3-components`,
        path: `src/library/rimble-web3-components/packages`,
        ignore: [`**/__snapshots__/**`, `**/*.test.js`, `**/*.snap`]
      }
    },
    "gatsby-transformer-react-docgen"
  ]
};
