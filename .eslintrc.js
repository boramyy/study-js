module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': [
			// https://prettier.io/docs/en/options.html
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 120,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		'import/extensions': 0,
		'import/no-unresolved': 'off', // Allow unresolved imports
		'generator-star-spacing': 'off', // Allow async-await
		'no-console': 'off',
		'no-plusplus': 'off',
		'no-undef': 'off',
		'no-unused-vars': ['error'],
		'no-param-reassign': 0,
		'import/namespace': 'off',
		'import/no-extraneous-dependencies': 0,
		'no-useless-escape': 0,
		'consistent-return': 'off',
		'require-await': 'error', // No async function without await
		'no-var': 'error',
		'object-shorthand': 1,
	},
};
