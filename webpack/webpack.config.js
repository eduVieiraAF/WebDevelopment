const modoDev = process.env.NODE_ENV !== "production"
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: new OptmizeCSSAssetsPlugin({})
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{
            test: /\s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader',
                'css-loader', 
                'sass-loader',
            ]
        }]
    }
}