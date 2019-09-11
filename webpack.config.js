const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: "./src/index.js",
  output: {
    path: "",
    filename: "bundle.js",
    publicPath: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true, // css-modules loading
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          }, // order is impt order goes from right to left or bottom to top so first css-loader willbe applied followed by style-loader
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                autoprefixer({
                  browsers: ["> 1%", "last 2 versions"]
                })
              ]
            }
          }
        ]
      }
    ]
  }
};
