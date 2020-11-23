/* eslint-disable no-undef */
const autoprefixer = require("autoprefixer");
const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 5000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/,
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: /src/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devtool: `source-map`,
};
