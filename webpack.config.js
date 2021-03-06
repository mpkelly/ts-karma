var path = require("path");

var config = {
  entry: [
      "./src/App.tsx"
  ],
  output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js"
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  }
};

module.exports = config;
