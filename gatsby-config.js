const queries = require("./src/utils/algolia");
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Rimble - Better dapp UX`,
    description: `Rimble provides resources and tools for faster dapp development with better UX`,
    author: `@consensysdesign`,
    image: `/rimble-logotype.svg`,
    siteUrl: `https://rimble.consensys.design/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-autolink-headers`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rimble-storefront`,
        short_name: `rimble`,
        start_url: `/`,
        background_color: `#4E3FCE`,
        theme_color: `#4E3FCE`,
        display: `minimal-ui`,
        icon: `static/rimble-logo.svg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: require.resolve("./src/templates/docs.js") },
        remarkPlugins: [require("gatsby-transformer-remark")],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/src/content/`
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
    `gatsby-transformer-react-docgen`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-125405131-2`
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000 // default: 1000
      }
    }
  ]
};
