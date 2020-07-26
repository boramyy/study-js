const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require("path");

module.exports = {
  mode: "production",
  // entry: "./src/index.js",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 3000,
  },
  output: {
    filename: "app.js",
    // filename: "[name].[hash].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "study js, 2020",
      template: "index.html",
    }),
  ],
};