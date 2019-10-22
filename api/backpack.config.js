const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ['./src/index.ts'];

    config.resolve = {
      extensions: ['.ts', '.js', '.json'],
    };

    config.module.rules.push({
      test: /\.ts$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
    });

    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  },
};
