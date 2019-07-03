/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require(`ts-node`).register({ files: true })
const path = require('path')

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components'),
        '~containers': path.resolve(__dirname, 'src/containers'),
        '~styles': path.resolve(__dirname, 'src/styles'),
        '~images': path.resolve(__dirname, 'src/images'),
        '~lib': path.resolve(__dirname, 'src/lib'),
        '~fonts': path.resolve(__dirname, 'src/fonts'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~providers': path.resolve(__dirname, 'src/proviers'),
        '~store': path.resolve(__dirname, 'src/store'),
        '~templates': path.resolve(__dirname, 'src/templates'),
      },
    },
  })
}
