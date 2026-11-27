// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
