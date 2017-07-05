const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, './app/app.module'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ]
    }
}