const BabelEnginePlugin = require('babel-engine-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'eval-source-map',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new BabelEnginePlugin()
    ],
    resolve: {
        modules: [ 'my_modules', 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: [
                  path.resolve(__dirname, 'node_modules/posthtml-beautify')
                ]
            }
        ]
    }
}