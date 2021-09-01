const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const roots = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
};

const theme = {
  src: {
    assets: path.resolve(roots.src, './assets'),
    config: path.resolve(roots.src, './config'),
    layout: path.resolve(roots.src, './layout'),
    locales: path.resolve(roots.src, './locales'),
    snippets: path.resolve(roots.src, './snippets'),
    templates: path.resolve(roots.src, './templates'),
    // customers: path.resolve(roots.src, './templates/customers'),
    sections: path.resolve(roots.src, './sections'),
    scripts: path.resolve(roots.src, './scripts'),
    // styles: path.resolve(roots.src, './styles'),
  },
  dist: {
    assets: path.resolve(roots.dist, './assets'),
    config: path.resolve(roots.dist, './config'),
    layout: path.resolve(roots.dist, './layout'),
    locales: path.resolve(roots.dist, './locales'),
    snippets: path.resolve(roots.dist, './snippets'),
    templates: path.resolve(roots.dist, './templates'),
    // customers: path.resolve(roots.dist, './templates/customers'),
    sections: path.resolve(roots.dist, './sections'),
    scripts: path.resolve(roots.dist, './scripts'),
    // styles: path.resolve(roots.dist, './styles'),
  },
}

module.exports = {
  entry: theme.src.scripts + '/main.js',
  output: {
    filename: 'theme.js',
    path: theme.dist.assets
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          //MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   exclude: /node_modules/,
      //   use: [
      //     "style-loader",
      //     MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "postcss-loader",
      //   ],
      // },
      {
        test: /\.liquid$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: theme.src.assets,
          to: theme.dist.assets,
          // flatten: true,
        },
        {
          from: theme.src.config,
          to: theme.dist.config,
        },
        {
          from: theme.src.layout,
          to: theme.dist.layout,
        },
        {
          from: theme.src.locales,
          to: theme.dist.locales,
        },
        {
          from: theme.src.snippets,
          to: theme.dist.snippets,
        },
        {
          from: theme.src.templates,
          to: theme.dist.templates,
        },
        {
          from: theme.src.sections,
          to: theme.dist.sections
        },
      ]
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
}