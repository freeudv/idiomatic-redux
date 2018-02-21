"use strict"

const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: ["react-hot-loader/patch", path.resolve(__dirname, "./src/index.js")]
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src/assets/"),
        use: "url-loader?limit=10000&name=assets/[name]-[hash].[ext]"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/assets/index.html"),
      filename: "index.html",
      path: path.resolve(__dirname, "./dist")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: "cheap-eval-source-map", //delete in production

  resolve: {
    extensions: [".js", ".jsx", ".json", "*"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true,
    host: "0.0.0.0"
  }
}
