var webpack = require('webpack'),
    path = require('path'),
    production = process.argv.indexOf('--production') === -1,
    NgAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    plugins = [new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            angular: "angular",
            "_": "lodash",
            Rx: "Rx"
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new NgAnnotatePlugin({
            add: true
        })];

production && plugins.push(new webpack.optimize.UglifyJsPlugin({warnings: false, minimize: true, drop_console: true}));

module.exports = {
    context: __dirname + '/src',
    entry: [
        './index.ts'
    ],
    output: {
        path: __dirname + '/.dist',
        publicPath: '/',
        filename: production ? '[name].bundle.js' : '[name].bundle.min.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js']
    },
    devtool: "source-map",
    module: {
        preLoaders: [
            { test: /\.ts$/, loader: "tslint" }
        ],
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ },
            { test: /\.html$/, loader: "raw", exclude: /(node_modules|.dist|.bower|.libs)/ }
        ]
    },
    plugins: plugins,
    externals: {
        jquery: "jQuery",
        angular: "angular",
        lodash: "_",
        Rx: "Rx"
    }
};