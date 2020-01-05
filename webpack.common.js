const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ManifestPlugin = require("webpack-manifest-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: "./app/src/index.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  node: {
    fs: 'empty',
    net: 'empty'
  },
  optimization: {
    usedExports: true,
    sideEffects: false,
    // splitChunks: {
    //   automaticNameDelimiter: ".",
    //   chunks: "all",
    //   cacheGroups: {
    //     materialUiVendor: {
    //       test(module) {
    //         const regex = /[\\/](node_modules)[\\/]((@)?material-ui).*$/gi;
    //         return regex.test(module.context);
    //       },
    //       name: "material-ui",
    //       priority: 5,
    //       enforce: true,
    //     },
    //     reactVendor: {
    //       test(module) {
    //         const regex = /[\\/](node_modules)[\\/]((@)?react).*$/gi;
    //         return regex.test(module.context);
    //       },
    //       name: "react",
    //       priority: 10,
    //       enforce: true,
    //     },
    //     vendors: {
    //       test(module) {
    //         const regex = /[\\/](node_modules)[\\/](?!(@)?material-ui|(@)?react).*$/gi;
    //         return regex.test(module.context);
    //       },
    //       name: "vendors",
    //       priority: 15,
    //       enforce: true,
    //     }
    //   }
    // }
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.tsx?$).*\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: { configFile: "app/tsconfig.build.app.json" },
          },
        ],
      },
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: ["file-loader"],
        include: /\.\/translations/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader?name=assets/fonts/[name].[ext]"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Ruffle Helper",
      favicon: path.join(__dirname, "/public/favicon.ico"),
      template: path.join(__dirname, "/public/index.html"),
    }),
  ],
};
