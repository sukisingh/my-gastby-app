module.exports = {
  siteMetadata: {
    title: 'Extravis Business',
    description: 'global branding agency helping companies to communicate through vision and imagination',
    keywords: 'branding, mobile application, marketing, google analytics, web design, web development'
  },
  plugins: [
    'gatsby-plugin-react-helmet' ,
    {
      resolve : 'gatsby-source-contentful' ,
      options : {
        spaceId : 'dp6gcdvf6lov' ,
        accessToken : 'e77ac5b67ff64f4fc22ed915a8cd49cbcd7f488f4e83f3ed15f10bcb3d3aa367'
      }
    }
  ],
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ], */


}
