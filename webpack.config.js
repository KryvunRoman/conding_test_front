const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    watch: NODE_ENV === 'development',
    devtool: NODE_ENV === 'development' && ' source-map',
    performance: {
        hints: NODE_ENV === 'production' ? "warning" : false
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: ['babel-loader', 'eslint-loader']
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg)$/,
            loaders: ['file-loader']
        }, {
            test: /\.json$/,
            loaders: ['json-loader']
        }]
    }
};