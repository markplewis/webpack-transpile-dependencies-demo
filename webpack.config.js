module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'eval-source-map',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
    ],
    resolve: {
        modules: [ 'my_modules', 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    }
}