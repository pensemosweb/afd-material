const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const yaml = require("yamljs");
const json5 = require("json5");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // "style-loader",
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.csv$/,
        loader: "csv-loader",
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },

      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Jesus Vazquez Lobato",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    liveReload: true,
    open: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
