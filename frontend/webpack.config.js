/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const os = require('os')
const path = require('path')

const chalk = require('chalk')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DIST = path.resolve(__dirname, 'dist')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './entry.ts',
    output: {
        filename: 'main.js',
        path: DIST,
    },
    module: {
        rules: [
            {
                test: [/\.[jt]sx?$/, /\.mjs$/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: '.cache',
                    },
                },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        static: [
            DIST,
            {
                watch: true,
            },
        ],
        host: 'notes.test',
        port: 8080,
        historyApiFallback: true,
        https: {
            key: fs.readFileSync('./ssl/privkey.pem'),
            cert: fs.readFileSync('./ssl/fullchain.pem'),
            ca: fs.readFileSync(
                path.join(os.homedir(), '.local/share/mkcert/rootCA.pem'),
            ),
        },
        onListening: () => {
            console.log(chalk.green('='.repeat(37)))
            console.log(chalk.green(`Listening at https://notes.test:8080/`))
            console.log(chalk.green('='.repeat(37)))
        },
    },
}
