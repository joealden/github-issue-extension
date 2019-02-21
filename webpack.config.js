const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = {
  mode: "production",
  entry: "./src/embed.tsx",
  output: {
    path: path.resolve(__dirname, "webpack-dist"),
    filename: "embed.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: "70",
                    firefox: "62"
                  }
                }
              ],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: ["babel-plugin-styled-components"]
          }
        }
      }
    ]
  },

  plugins: [
    new CopyPlugin([
      {
        from: "src/manifest.json",
        to: "manifest.json"
      },
      {
        from: "src/icons",
        to: "icons"
      }
    ]),
    new WebpackBar()
  ]
};
