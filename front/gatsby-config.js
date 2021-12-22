module.exports = {
  pathPrefix: "/testim-mocks-example",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Testim mocks examples",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
