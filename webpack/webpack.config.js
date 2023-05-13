const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
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