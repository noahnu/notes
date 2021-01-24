module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        '@tophat/eslint-config/base',
        '@tophat/eslint-config/jest',
        '@tophat/eslint-config/react',
        'prettier',
    ],
    env: {
        browser: true,
    },
    rules: {
        'no-unused-vars': 'off', // covered by typescript eslint
        'import/order': [
            'error',
            {
                alphabetize: { order: 'asc' },
                'newlines-between': 'always',
                groups: [
                    'unknown',
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
            },
        ]
    },
    ignorePatterns: ['.*', 'dist'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
            webpack: {},
        },
    },
}
