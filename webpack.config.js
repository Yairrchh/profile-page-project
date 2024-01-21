const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const ProgressPlugin = require('progress-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: './src/index.js',

    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            '@styles': path.resolve(__dirname,'src/styles'),
            '@App': path.resolve(__dirname,'src/App'),
            '@Components': path.resolve(__dirname,'src/Components'),
            '@assets': path.resolve(__dirname,'src/assets'),
        }
    },

    module: {
        rules: [
        {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/i,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
        },
        ]
    },
    plugins: [

        new ProgressPlugin(true),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/briefcaseImg"),
                    to: "assets/briefcaseImg"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/skillSet-icon"),
                    to: "assets/skillSet-icon"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/achievements"),
                    to: "assets/achievements"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/achievements-icon"),
                    to: "assets/achievements-icon"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/icon"),
                    to: "assets/icon"
                },
            ]
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
};