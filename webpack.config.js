var webpack = require('webpack'),
    path = require('path'),
    production = process.argv.indexOf('--production') !== -1,
    NgAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    spa = require("browser-sync-spa"),
    plugins = [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            angular: "angular",
            "_": "lodash",
            Rx: "rxjs"
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: [__dirname + '/.dist'] }
        }, {
            use: spa({
                selector: "[ng-app]"
            })
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new NgAnnotatePlugin({add: true})
    ];

production && plugins.push(new webpack.optimize.UglifyJsPlugin({warnings: false, minimize: true, drop_console: true}));

module.exports = {
    context: __dirname + '/src',
    entry: [
        './index.ts'
    ],
    output: {
        path: __dirname + '/.dist',
        publicPath: '/',
        filename: !production ? 'app.js' : 'app.min.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    devtool: "source-map",
    module: {
        preLoaders: [
            { test: /\.ts$/, loader: "tslint", exclude:/(node_modules|\.libs)/}
        ],
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader'], exclude:/(node_modules|\.libs)/ },
            { test: /\.html$/, loader: "raw", exclude: /(node_modules|\.libs|\.dist|\.tsd|\.bower)/ }
        ]
    },
    plugins: plugins,
    externals: {
        jquery: "jQuery",
        angular: "angular",
        lodash: "_",
        rxjs: "Rx"
    }
};