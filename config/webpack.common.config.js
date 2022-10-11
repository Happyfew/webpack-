const path = require('path');

module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    output: {
        publicPath: '/',
        filename: 'js/[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties',
                        ],
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            limit: 8192,
                        },
                    }
                ]
            },
            {
                test:/\.(woff|woff2|eot|otf|svg)$/,
                use:'file-loader',
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less', '.scss'],
        modules: [ path.resolve(__dirname, '../src'), 'node_modules' ],
        alias: {
        //   _components: path.join(__dirname, '../src/components'),
        //   _images: path.join(__dirname, '../src/images'),
        //   _pages: path.join(__dirname, '../src/pages'),
        //   _util: path.join(__dirname, '../src/util'),
        //   _mock: path.join(__dirname, '../src/mock'),
          src: path.join(__dirname, '../src'),
        }
    },
}