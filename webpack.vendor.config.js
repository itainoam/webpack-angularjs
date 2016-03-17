var webpack = require('webpack'),
    path = require('path'),
    plugins = [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
        ];
module.exports = {
    context: __dirname,
    entry: {
        vendor: ["angular", "lodash"]
    },
    plugins: plugins,
    output: {
        path: __dirname + '/.dist/js',
        publicPath: '/',
        filename: 'vendor.something.js'
    }
};