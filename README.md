# webpack-gulp-angularjs
Seed for building angularJs application written in typescript using just webpack.

Application is building with separate webpack config webpack.config.js and vendor libs are packed with
webpack.vendor.config.js
## Prerequisites
You need to have installed [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node) on your system.

Then install these node packages
```
npm install -g tsd bower webpack gulp
```

## How to install
This command will install required node dependencies and build the application into .dist/js/{name-of-application}
```
npm install
```

If you want to watch for changes and test things up run
```
npm start
```

### Note
There are couple of dependencies which might not be needed in npm, such as RxJs, Lodash, patternfly.
These are just for testing purposes.
