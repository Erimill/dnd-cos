module.exports = {
  siteMetadata: {
    title: "DnDCoS",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "my-website-bucket",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "Class",
        path: "./src/json/Class",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "Race",
        path: "./src/json/races.json",
      },
    },
  ],
};
