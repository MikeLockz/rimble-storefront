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
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
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
    }
  ]
};
