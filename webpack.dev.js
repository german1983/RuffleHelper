const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   title: "Ruffle Helper",
    //   favicon: path.join(__dirname, "/public/favicon.ico"),
    //   template: path.join(__dirname, "/public/index.html"),
    // }),
    // new ManifestPlugin(),
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false,
    //   analyzerPort: 4000,
    // })
  ]
});
