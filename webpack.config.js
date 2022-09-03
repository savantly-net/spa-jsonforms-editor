const webpack = require("webpack");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "savantly",
    projectName: "spa-jsonforms-editor",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      fallback: {
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        util: require.resolve("util/"),
        url: require.resolve("url/"),
        path: require.resolve("path-browserify"),
      },
      //extensions: [".ts", ".js"]
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  });
};
