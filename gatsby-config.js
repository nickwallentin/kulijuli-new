require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kulijuli - Skånes största allsångsevenemang`,
    description: `Kulijuli är en höjdpunkt för många skåningar, både äldre och yngre. Under Juli månad så bjuds det på folkkära artister, allsång och trevliga inslag på Nöjesgrytan i Helsingborg.`,
    author: `@nickwallentin`,
    defaultImage: `/images/kulijuli_web_image.png`,
    siteUrl: `https://www.kulijuli.se`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `press`,
        path: `${__dirname}/content/press/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `podcast`,
        path: `${__dirname}/content/podcast/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.AIRTABLE_API_KEY}`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appm85LyX225thUvR`,
            tableName: `Avsnitt`,
            tableView: `Publicerade`,
            tableLinks: [`Gäster`],
          },
          {
            baseId: `appm85LyX225thUvR`,
            tableName: `Gäster`,
          },
          {
            baseId: `app1kIWnk1iD58izy`,
            tableName: `Datum`,
            mapping: {
              Bild: `fileNode`,
            },
            tableLinks: [`Program`],
          },
          {
            baseId: `app1kIWnk1iD58izy`,
            tableName: `Program`,
            mapping: {
              Bild: `fileNode`,
            },
            tableLinks: [`Datum`],
          },
          {
            baseId: `appH03qFrWSkrnsH6`,
            tableName: `Sponsorer`,
            tableView: `Hemsida`,
            mapping: {
              Logo: `fileNode`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-normalize-paths",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113959350-9",
        head: false,
        anonymize: true,
        respectDNT: true,
        defer: true,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
    },
  ],
}
