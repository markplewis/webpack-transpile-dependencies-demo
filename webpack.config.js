const BabelEnginePlugin = require('babel-engine-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'eval-source-map',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new BabelEnginePlugin({
            presets: [
                ['@babel/preset-env', {
                    "targets": {
                        "browsers": [
                            "last 2 versions"
                        ]
                    },
                    "debug": true,
                    "useBuiltIns": "usage"
                }]
            ]
        })
    ],
    resolve: {
        modules: [ 'my_modules' ]
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