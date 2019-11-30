//this is a node file
const { parsed: localEnv } = require('dotenv').config();
//allows special access
const webpack = require('webpack');

module.exports = {
    webpack(config) {
            config.plugins.push(new webpack.NodeEnvironmentPlugin(localEnv));
            return config;

    }
};