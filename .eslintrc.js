// https://eslint.org/docs/rules/

/** @type {import('eslint').Linter.BaseConfig} */
const config = {
	env: { es6: true, node: true },
	parser: '@typescript-eslint/parser',
	parserOptions: { project: 'tsconfig.json', sourceType: 'module' },
	plugins: ['@typescript-eslint', 'jsdoc', 'import', 'prefer-arrow'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'warn',
		'@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
		'@typescript-eslint/ban-types': [
			'warn',
			{
				types: {
					Object: { message: 'Avoid using the `Object` type. Did you mean `object`?' },
					Function: { message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.' },
					Boolean: { message: 'Avoid using the `Boolean` type. Did you mean `boolean`?' },
					Number: { message: 'Avoid using the `Number` type. Did you mean `number`?' },
					String: { message: 'Avoid using the `String` type. Did you mean `string`?' },
					Symbol: { message: 'Avoid using the `Symbol` type. Did you mean `symbol`?' },
				},
			},
		],
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/dot-notation': 'warn',
		'@typescript-eslint/explicit-member-accessibility': ['off', { accessibility: 'explicit' }],
		'@typescript-eslint/naming-convention': [
			'warn',
			{ selector: 'variableLike', format: ['camelCase'] },
			{ selector: 'typeLike', format: ['PascalCase'] },
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: false,
				},
			},
		],
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-misused-new': 'warn',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-this-alias': 'warn',
		'@typescript-eslint/no-unused-expressions': 'warn',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/prefer-function-type': 'warn',
		'@typescript-eslint/prefer-namespace-keyword': 'warn',
		'@typescript-eslint/triple-slash-reference': ['warn', { path: 'always', types: 'prefer-import', lib: 'always' }],
		'@typescript-eslint/unified-signatures': 'warn',
		camelcase: 'warn',
		complexity: 'off',
		'constructor-super': 'warn',
		curly: ['warn', 'multi-line'],
		eqeqeq: ['warn', 'smart'],
		'guard-for-in': 'warn',
		'id-blacklist': [
			'warn',
			'any',
			'Number',
			'number',
			'String',
			'string',
			'Boolean',
			'boolean',
			'Undefined',
			'undefined',
		],
		'id-match': 'warn',
		'import/no-extraneous-dependencies': ['warn', { devDependencies: false }],
		'import/no-internal-modules': 'warn',
		'import/order': 'off',
		'jsdoc/check-alignment': 'warn',
		'jsdoc/check-indentation': 'warn',
		'jsdoc/newline-after-description': 'warn',
		'max-classes-per-file': ['warn', 1],
		'no-bitwise': 'warn',
		'no-caller': 'warn',
		'no-cond-assign': 'warn',
		'no-console': 'off',
		'no-debugger': 'warn',
		'no-duplicate-case': 'warn',
		'no-duplicate-imports': 'warn',
		'no-empty': 'warn',
		'no-eval': 'warn',
		'no-extra-bind': 'warn',
		'no-fallthrough': 'off',
		'no-invalid-this': 'off',
		'no-new-func': 'warn',
		'no-new-wrappers': 'warn',
		'no-redeclare': 'warn',
		'no-return-await': 'warn',
		'no-sequences': 'warn',
		'no-shadow': ['warn', { hoist: 'all' }],
		'no-sparse-arrays': 'warn',
		'no-template-curly-in-string': 'warn',
		'no-throw-literal': 'warn',
		'no-undef-init': 'warn',
		'no-underscore-dangle': 'warn',
		'no-unsafe-finally': 'warn',
		'no-unused-labels': 'warn',
		'no-unneeded-ternary': 'warn',
		'no-var': 'warn',
		'object-shorthand': 'warn',
		'one-var': ['warn', 'never'],
		'prefer-arrow/prefer-arrow-functions': 'warn',
		'prefer-const': 'warn',
		'prefer-object-spread': 'warn',
		radix: 'warn',
		'spaced-comment': ['warn', 'always', { markers: ['/'] }],
		'use-isnan': 'warn',
		'valid-typeof': 'off',
	},
}

module.exports = config
