/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({ quiet: true })

module.exports = {
  siteMetadata: {
    title: `Dr. Nimesh Jain`,
    description: `Consultant neurosurgeon specializing in brain, spine and trauma care.`,
    author: `Dr. Nimesh Jain`,
    siteUrl:
      process.env.GATSBY_WEBSITE_URL || "https://drnimesh.studiosentientdemo.com",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.GATSBY_WPGRAPHQL_URL ||
          "https://drnimesh.studiosentientdemo.com/graphql",
      },
    },
  ],
}
