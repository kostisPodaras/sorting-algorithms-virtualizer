/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({
  loaders,
  stage,
  plugins,
  actions: { setWebpackConfig },
}) => {
  // TODO: Check if needed..
  setWebpackConfig({
    module: {
      rules: [
        {
          test: /node_modules[\\/]moment-timezone[\\/]/,
          use: [
            {
              loader: 'moment-timezone-loader',
              options: {
                zones: [
                  // List here all the timezones that you want included
                  'Europe/Athens',
                ],
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        plugins.minifyJs({
          terserOptions: {
            ecma: 5, // Ensures minified js is IE11 compatible
          },
        }),
        plugins.minifyCss(),
      ],
    },
  });

  if (stage === 'develop') {
    setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [loaders.js()],
          },
        ],
      },
    });
  }

  // If production JavaScript and CSS build
  if (process.env.DEPLOY_BUILD && stage === 'build-javascript') {
    // Turn off source maps
    setWebpackConfig({
      devtool: false,
    });
  }
};
