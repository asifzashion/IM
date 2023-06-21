const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const betaEnv = require('./config-enviroments/beta.config')
const productionEnv = require('./config-enviroments/production.config')
const CONFIG_PROFILE = process.env.CONFIG_PROFILE || "production"; // allowed values [production,beta,gama,preprod,local]
console.log('Start Building with:', CONFIG_PROFILE);
let envConfig;
switch (CONFIG_PROFILE) {
  case 'production':
    envConfig = productionEnv;
    break;
  case 'beta':
    envConfig = betaEnv;
    break;
  default:
    throw new Error(`Unrecognized CONFIG_PROFILE=(${CONFIG_PROFILE}) value`)
}
process.env = { ...envConfig || {}, ...process.env || {} };
module.exports = function (){
  return withBundleAnalyzer({
      distDir: "_next",
      generateBuildId: async () => {
          if (process.env.BUILD_ID) {
              return process.env.BUILD_ID;
          } else {
              return `${new Date().getTime()}`;
          }
      },
      webpack: function (config, {isServer}) {
          config.resolve.fallback = {
              ...config.resolve.fallback,
              crypto: "empty",
              fs: false,
              net: false,
              tls: false,
              child_process: false,
          };
          config.module.rules.push({
              test: /\.(eot|woff|woff2|otf|ttf|svg|png|jpg|gif)$/,
              use: {
                  loader: 'url-loader',
                  options: {
                      limit: 100000,
                      name: '[name].[ext]'
                  }
              }
          })
          return config
      },
      env: envConfig,
  });
};