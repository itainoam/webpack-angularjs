var webpack = require('webpack'),
    path = require('path'),
    production = process.argv.indexOf('--production') !== -1,
    NgAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    Wiredep = require('wiredep'),
    spa = require("browser-sync-spa"),
    plugins = [
        new CopyWebpackPlugin([
            { from: __dirname + '/src/index.html', to: __dirname + '/..'}
            ]),
        new webpack.ProvidePlugin({
            angular: "angular",
            '_': "lodash"
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 4000,
            server: { baseDir: [__dirname + '/.dist'] }
        }, {
            use: spa({
                selector: '[ng-app]'
            })
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new NgAnnotatePlugin({add: true})
    ];

production && plugins.push(new webpack.optimize.UglifyJsPlugin({warnings: false, minimize: true, drop_console: true}));
module.exports = {
    context: __dirname,
    entry: {
        app:[
            './src/styles/static-assets.less',
            './src/index.ts'
        ]
    },
    output: {
        path: __dirname + '/.dist/js',
        publicPath: '/',
        filename: !production ? 'miq-static-assets.js' : 'miq-static-assets.min.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    devtool: production && "source-map",
    module: {
        preLoaders: [
            { test: /\.ts$/, loader: "tslint", exclude:/(node_modules|\.libs)/}
        ],
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader'], exclude:/(node_modules|\.libs)/ },
            { test: /\.html$/, loader: "raw", exclude: /(node_modules|\.libs|\.dist|\.tsd|\.bower)/ },
            // stylesheets
            {test: /\.less$/, exclude: /(node_modules|lib)/, loader: "style!css?sourceMap!less?sourceMap"},
            {test: /\.css$/, loader: "style!css?sourceMap"}
        ]
    },
    plugins: plugins,
    externals: {
        "angular": "angular"
    }
};