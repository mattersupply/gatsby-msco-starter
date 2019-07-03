require(`ts-node`).register({ files: true })

if (process.env.ENVIROMENT !== `production`) {
  require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const OverlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
  transition:
    'visibility 0s ease-in-out 0.2s, opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
}

const ContentStyle = {
  zIndex: 1,
  overflow: 'hidden',
  maxHeight: '100vh',
  background: 'rgb(0, 0, 0)',
  border: '0px',
  padding: '0',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}

var proxy = require('http-proxy-middleware')
module.exports = {
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        secure: false, // Do not reject self-signed certificates.
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
  siteMetadata: {
    title: `Site Meta`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/App`),
      },
    },
    `@rhysforyou/gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SiteName`,
        short_name: `ShortName`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `browser`,
        // icon: `src/images/...`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
  ],
}
