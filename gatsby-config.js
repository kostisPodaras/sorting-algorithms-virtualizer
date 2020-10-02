/**
 * Gatsby site configuration options in this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const { createGenerateClassName } = require('@material-ui/styles');

const config = require(`./config`);

const { GATSBY_DEPLOY_BUILD } = process.env;

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
  },
  plugins: [
    // // Client-Only routes (Not used at the moment)
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/app/*`, `/auth/*`] },
    // },

    // JSON transformer
    'gatsby-transformer-json',

    // Import Aliases
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          _mock: './src/tools/fetch-mock',
          config: './config',
          components: './src/components',
          models: './src/models',
          store: './src/store',
          utils: './src/utils',
          pages: './src/pages',
          test: './src/tools/jest',
          core: './src/core',
        },
        extensions: ['js', 'css', 'json', 'svg', 'png', 'jpeg', 'jpg'],
      },
    },

    // Flow
    'gatsby-plugin-flow',

    // Redux
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/store/createStore',
      },
    },

    // Material UI (Browser + SSR)
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          generateClassName: createGenerateClassName(),
        },
      },
    },

    // nprogress indicator
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#005ECE',
        showSpinner: true,
      },
    },

    // React Helmet
    'gatsby-plugin-react-helmet',

    // Webpack bundle analyzer
    ...(!GATSBY_DEPLOY_BUILD
      ? [
          {
            resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
            options: {
              analyzerMode: 'disabled',
              generateStatsFile: true,
              statsOptions: { source: false },
            },
          },
        ]
      : []),

    // Sitemap (SSR)
    'gatsby-plugin-sitemap',

    // Create robots.txt
    'gatsby-plugin-robots-txt',

    // Web app manifest (PWA)
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        name: config.siteTitle,
        short_name: config.siteShortName,
        start_url: '/index.html',
        background_color: '#00369c',
        theme_color: '#005ECE',
        crossOrigin: 'anonymous',
        // icon: `${__dirname}/static/favicon.png`,
      },
    },

    // Remove Offline support (service worker)
    ...(!config.offlineFirst ? [`gatsby-plugin-remove-serviceworker`] : []),

    // Offline support (service worker)
    ...(config.offlineFirst
      ? [
          {
            resolve: 'gatsby-plugin-offline',
            options: {
              workboxConfig: {
                runtimeCaching: [
                  {
                    // Use cacheFirst since these don't need to be revalidated
                    urlPattern: /(\.js$|\.css$|static\/)/,
                    handler: `CacheFirst`,
                  },
                  {
                    // page-data.json files are not content hashed
                    urlPattern: /^https?:.*\/page-data\/.*\/page-data\.json/,
                    handler: 'NetworkFirst',
                  },

                  // {
                  //   // Google Fonts
                  //   urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css\??.*/,
                  //   handler: `StaleWhileRevalidate`,
                  // },
                  // {
                  //   // Typekit Fonts
                  //   urlPattern: /^https?:\/\/.*\.typekit\.net\/.*/,
                  //   handler: `StaleWhileRevalidate`,
                  // },

                  {
                    // Add runtime caching of various other page resources
                    // NOTE: Videos (avi, mp4) not working on Safari , in offline-first apps
                    // see:
                    //      https://philna.sh/blog/2018/10/23/service-workers-beware-safaris-range-request/
                    //      https://github.com/GoogleChrome/workbox/issues/1663
                    //      https://github.com/gatsbyjs/gatsby/issues/13615
                    urlPattern: /^https?:.*\.(js|woff|woff2|json|css|png|jpg|jpeg|webp|svg|gif|tiff|vtt|webm)$/,
                    handler: `StaleWhileRevalidate`,
                  },
                ],
              },
            },
          },
        ]
      : []),
  ],
};
