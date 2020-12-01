const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: path.resolve(__dirname, '') + '/server.ts',
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: "../dist", to: "ui"},
        {from: "./authorization.json", to: ""}
      ],
    }),
  ],
};
