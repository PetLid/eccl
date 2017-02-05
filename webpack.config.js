module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'game.bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true
            }
        }]
    }
}
