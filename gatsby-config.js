module.exports = {
  plugins: [
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `careers`,
        path: `${__dirname}/src/careers/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-remark`,
     `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
   
  ],

}