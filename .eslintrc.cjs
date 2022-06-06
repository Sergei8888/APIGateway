module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: [
        'prettier',
        '@typescript-eslint/eslint-plugin',
        'eslint-plugin-tsdoc',
    ],
    // add your custom rules here
    rules: {
        // Transform prettier formatting to eslint errors
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                singleQuote: true,
            },
        ],
        // Production disabling
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // Comment formatting
        'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    },
};
