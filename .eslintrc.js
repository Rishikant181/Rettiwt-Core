module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc', 'import'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				selector: ['class'],
				format: ['PascalCase'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I'],
			},
			{
				selector: 'enum',
				format: ['PascalCase'],
				prefix: ['E'],
			},
			{
				selector: ['variableLike', 'memberLike'],
				format: ['camelCase'],
			},
			{
				selector: 'enumMember',
				format: ['UPPER_CASE'],
			},
		],
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-extraneous-class': [
			'warn',
			{
				allowEmpty: true,
			},
		],
		'@typescript-eslint/no-inferrable-types': 'off',
		'tsdoc/syntax': 'warn',
		'sort-imports': [
			'warn',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: true,
			},
		],
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					['sibling', 'parent'],
					'index',
					'unknown',
			  	],
			  	alphabetize: {
					order: 'asc',
					caseInsensitive: true,
			  	},
			},
		],
	},
};
