module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: { node: '15.6.0' },
            },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins: [],
}
