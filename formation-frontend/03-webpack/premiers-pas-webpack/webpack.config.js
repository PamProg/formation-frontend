let path = require("path");
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    plugins: [

    ]
}