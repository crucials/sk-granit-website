const HTMLPlugin = require('html-webpack-plugin')
const CSSExtractPlugin = require('mini-css-extract-plugin')
const PostCSSPreset = require('postcss-preset-env')

const tailwind = require('tailwindcss')

const path = require("path");
const { readFileSync } = require('fs')

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development' ? true : false
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined

module.exports = {
    mode,
    target,
    devtool,

    devServer: {
        open: true,
        hot: false,
        port: 1239
    },

    entry: {
        index: ['./src/index.ts', './src/index.css'],
        main: ['./src/scripts/main/main.ts', './src/styles/main.css'],
        catalog: ['./src/scripts/catalog/catalog.ts', './src/styles/catalog.css'],
        about: ['./src/scripts/about/about.ts', './src/styles/about.css'],
        works: ['./src/scripts/works/works.ts', './src/styles/works.css']
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext]'
    },

    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'pages', 'main.html'),
            chunks: ['index', 'main'],
            favicon: './src/assets/images/favicon.ico'
        }),
        new HTMLPlugin({
            filename: 'services/index.html',
            template: path.resolve(__dirname, 'src', 'pages', 'services.html'),
            chunks: ['index'],
            favicon: './src/assets/images/favicon.ico'
        }),
        new HTMLPlugin({
            filename: 'catalog/index.html',
            template: path.resolve(__dirname, 'src', 'pages', 'catalog.html'),
            chunks: ['index', 'catalog'],
            favicon: './src/assets/images/favicon.ico'
        }),
        new HTMLPlugin({
            filename: 'about/index.html',
            template: path.resolve(__dirname, 'src', 'pages', 'about.html'),
            chunks: ['index', 'about'],
            favicon: './src/assets/images/favicon.ico'
        }),
        new HTMLPlugin({
            filename: 'works/index.html',
            template: path.resolve(__dirname, 'src', 'pages', 'works.html'),
            chunks: ['index', 'works'],
            favicon: './src/assets/images/favicon.ico'
        }),
        new HTMLPlugin({
            filename: 'contacts/index.html',
            template: path.resolve(__dirname, 'src', 'pages', 'contacts.html'),
            chunks: ['index'],
            favicon: './src/assets/images/favicon.ico'
        }),

        new CSSExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.html/i,
                use: 'html-loader'
            },

            {
                test: /\.css/i,
                use: [
                    devMode ? 'style-loader' : CSSExtractPlugin.loader,
                    'css-loader',

                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [ PostCSSPreset, tailwind ]
                            }
                        }
                    }
                ]
            },

            {
                test: /\.ts/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },

            {
                test: /\.(ttf|woff2?)/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },

            {
                test: /\.(png|jpg|gif|ico|svg)/i,

                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              progressive: true,
                            },

                            optipng: {
                              enabled: false,
                            },

                            pngquant: {
                              quality: [0.65, 0.90],
                              speed: 4
                            },

                            gifsicle: {
                              interlaced: false,
                            },

                            webp: {
                              quality: 75
                            }
                          }
                    }
                ],

                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js'],
    }
}