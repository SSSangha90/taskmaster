module.exports = {
	env: {
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',

		// https://eslint.vuejs.org/user-guide/#usage
		// 'plugin:vue/vue3-essential', //  ... base, plus rules to prevent errors or unintended behavior.
		// 'plugin:vue/vue-3-strongly-recommended', // ... Above, plus rules to considerably improve code readability and/or dev experience.
		'plugin:vue/vue3-recommended' // ...Above, plus rules to enforce subjective community defaults to ensure consistency
	],
	// Override/add rules settings here
	// See https://eslint.vuejs.org/rules/ for list of EsLint rules and what they do
	// See https://eslint.vuejs.org/rules/html-self-closing.html#vue-html-self-closing for list of Vue specific ESLint rules and what they do
	rules: {
		// override/add rules settings here, such as:

		// ESLint specific  - https://eslint.vuejs.org/rules/

		// Quotes
		'quotes': [
			'error', 'single', {
				allowTemplateLiterals: true,
			}
		],
		'quote-props': ['error', 'consistent-as-needed'],
		// Indent
		'indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ignoreComments: true,
			}
		],
		'vue/html-indent': ['error', 'tab'],

		// Comma rules
		'comma-dangle': [
			'error', {
				arrays: 'never',
				objects: 'always-multiline',
				imports: 'never',
				exports: 'never',
				functions: 'never',
			}
		],
		'comma-spacing': [
			'error', {
				before: false,
				after: true,
			}
		],
		'comma-style': ['error', 'last'],

		// Semicolon
		'semi': ['error', 'always'],
		// enforce multiline ternary statements
		'multiline-ternary': ['error', 'always-multiline'],

		// no duplicate imports
		'no-duplicate-imports': ['error'],

		//disallow self compare
		'no-self-compare': 'error',

		// enforcing backtick
		'no-template-curly-in-string': 'error',

		// no use before undefined
		'no-use-before-define': 'error',

		// atomic update
		'require-atomic-updates': 'error',

		// requires strict comparison
		'eqeqeq': ['error', 'always'],

		// no lonely blocks
		'no-lone-blocks': 'error',

		// Code styling specific

		// Array styling
		'array-bracket-newline': [
			'error', {
				multiline: true,
			}
		],

		// Array bracket spacing
		'array-bracket-spacing': ['error', 'never'],

		// Array new line
		'array-element-newline': ['error', 'consistent'],

		// Arrow spacing
		'arrow-spacing': 'error',

		// Block spacing
		'block-spacing': 'error',

		// Brace Style
		'brace-style': ['error', '1tbs'],

		// computed property spacing
		'computed-property-spacing': ['error', 'never'],

		// Trailing spaces
		'no-trailing-spaces': ['error'],

		// Function Spacing
		'func-call-spacing': ['error', 'never'],

		//Key spacing
		'key-spacing': [
			'error', {
				beforeColon: false,
				afterColon: true,
			}
		],

		// keyword spacing
		'keyword-spacing': [
			'error', {
				before: true,
				after: true,
			}
		],

		// Code length
		'max-len': [
			'error',
			{
				code: 120, // ... enforces a maximum line length. default 80
				tabWidth: 4, // ... specifies the character width for tab characters. default 2
				ignorePattern: '(?:\\{\\{.*\\}\\}|\\$t\\(\'[a-z A-Z]*\'\\))', // ignores template syntax mustache operators and translated strings
				ignoreComments: true, // ... if true, ignores all trailing comments and comments on their own line. default false
				ignoreTrailingComments: true, // ... if true, ignores only trailing comments. default false
				ignoreUrls: true, // ... if true, ignores lines that contain a URL. default false
				ignoreStrings: true, // ... if true, ignores lines that contain a double-quoted or single-quoted string. default false
				ignoreTemplateLiterals: true, // ... if true, ignores lines that contain a template literal. default false
				ignoreRegExpLiterals: true, // ... if true, ignores lines that contain a RegExp literal. default false
			}
		],

		// Max statements per line
		'max-statements-per-line': [
			'error', {
				max: 1,
			}
		],

		// Chaining
		'newline-per-chained-call': [
			'error', {
				ignoreChainWithDepth: 3,
			}
		],

		// parentheses
		'no-extra-parens': 'error',

		// Pointless spacing
		'no-multi-spaces': 'error',

		// empty spacing
		'no-multiple-empty-lines': [
			'error', {
				max: 2,
				maxEOF: 0,
				maxBOF: 0,
			}
		],

		'no-unused-vars': [
			'error', {
				ignoreRestSiblings: true,
			}
		],

		// Property spacing
		'no-whitespace-before-property': 'error',

		// Objects
		'object-curly-newline': [
			'error', {
				ObjectPattern: {
					minProperties: 1,
				},
				ObjectExpression: {
					minProperties: 1,
				},
				ImportDeclaration: {
					multiline: true,
					minProperties: 3,
				},
				ExportDeclaration: 'never',
			}
		],

		'object-curly-spacing': ['error', 'always'],

		'object-property-newline': 'error',

		// Operator linebreak
		'operator-linebreak': ['error', 'after'],

		// Spread operator
		'rest-spread-spacing': ['error', 'never'],

		// Semi colons
		'semi-spacing': 'error',
		'semi-style': ['error', 'last'],

		// Spacing before block statements
		'space-before-blocks': 'error',

		// function parenthesis
		'space-before-function-paren': [
			'error', {
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			}
		],
		'space-in-parens': ['error', 'never'],

		// Spacing
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'switch-colon-spacing': [
			'error', {
				after: true,
				before: false,
			}
		],

		// Templates
		'template-curly-spacing': 'error',

		// Vue specific rules - https://eslint.vuejs.org/rules/

		// Vue html self closing (void tags) - https://eslint.vuejs.org/rules/html-self-closing.html#vue-html-self-closing
		'vue/html-self-closing': [
			'error',
			{
				html:
				{
					void: 'always',
					normal: 'always',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			}
		],
		// Vue html closing bracket spacing - https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html#vue-html-closing-bracket-spacing
		'vue/html-closing-bracket-spacing': [
			'error', {
				startTag: 'never',
				endTag: 'never',
				selfClosingTag: 'always',
			}
		],

		// Vue blocktags newline - https://eslint.vuejs.org/rules/block-tag-newline.html
		'vue/block-tag-newline': [
			'error', {
				singleline: 'always',
				multiline: 'always',
				maxEmptyLines: 0,
			}
		],

		// Vue component name case - https://eslint.vuejs.org/rules/component-name-in-template-casing.html
		'vue/component-name-in-template-casing': [
			'error', 'kebab-case', {
				registeredComponentsOnly: true,
			}
		],

		// Vue component registration case (options) - https://eslint.vuejs.org/rules/component-options-name-casing.html
		'vue/component-options-name-casing': ['error', 'PascalCase'],

		// Vue event name casing - https://eslint.vuejs.org/rules/custom-event-name-casing.html
		'vue/custom-event-name-casing': [
			'error',
			'kebab-case',
			{
				ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'], // Ignore semicolon in events
			}
		],

		// Vue comment content spacing
		'vue/html-comment-content-spacing': [
			'error', 'always', {
				exceptions: ['*'],
			}
		],

		// Vue consistent comment spacing
		'vue/html-comment-indent': ['error', 'tab'],

		// Vue match component filename
		'vue/match-component-file-name': [
			'error', {
				extensions: ['vue'],
				shouldMatchCase: true,
			}
		],

		// Vue newline between multiline property
		'vue/new-line-between-multi-line-property': [
			'error', {
				minLineOfMultilineProperty: 2,
			}
		],

		// Vue no child content (v-html/v-text)
		'vue/no-child-content': ['error'],

		// Vue no duplicate attr inheritance
		'vue/no-duplicate-attr-inheritance': ['error'],

		// Vue disallow empty [template, script, and style] tags
		'vue/no-empty-component-block': ['error'],

		// Vue no invalid model keys
		'vue/no-invalid-model-keys': ['error'],

		// Vue disallow typos
		'vue/no-potential-component-option-typo': [
			'error', {
				presets: ['vue'],
				custom: [],
				threshold: 1,
			}
		],

		// Vue no reserved component names
		'vue/no-reserved-component-names': [
			'error', {
				disallowVueBuiltInComponents: true,
				disallowVue3BuiltInComponents: true,
			}
		],

		// Vue no this in beforeRouteEnter (scope of "this" won't exist)
		'vue/no-this-in-before-route-enter': ['error'],

		// Vue no unused properties
		'vue/no-unused-properties': [
			'error', {
				groups: ['props', 'data'],
				deepData: false,
				ignorePublicMembers: false,
			}
		],

		// Vue no unused refs
		'vue/no-unused-refs': ['error'],

		// Vue no computed use like method
		'vue/no-use-computed-property-like-method': ['error'],

		// Vue no useless mustaches
		'vue/no-useless-mustaches': [
			'error', {
				ignoreStringEscape: true,
			}
		],

		// Vue no useless v-bind
		'vue/no-useless-v-bind': ['error'],

		// Vue force padding line between blocks
		'vue/padding-line-between-blocks': ['error', 'always'],

		// Vue prefer separate static classes
		'vue/prefer-separate-static-class': ['error'],

		// Vue disable parentheses on v-on function call
		'vue/v-on-function-call': ['error', 'never'],

		// Vue attributes per line
		'vue/max-attributes-per-line': [
			'error', {
				singleline: {
					max: 1,
				},
				multiline: {
					max: 1,
				},
			}
		],

		// Vue HTML inner content rules
		'vue/singleline-html-element-content-newline': ['error'],
		'vue/multiline-html-element-content-newline': ['error'],

		// Vue HTML closing bracket
		'vue/html-closing-bracket-newline': [
			'error', {
				singleline: 'never',
				multiline: 'always',
			}
		],

		'vue/max-len': [
			'error', {
				code: 120,
				template: 120,
				tabWidth: 4,
				ignorePattern: '(?:\\{\\{.*\\}\\}|\\$t\\(\'[a-z A-Z]*\'\\))',
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignoreHTMLTextContents: true,
			}
		],
		'vue/multi-word-component-names': [
			'error', {
				ignores: ['Can'],
			}
		], // https://eslint.vuejs.org/rules/multi-word-component-names.html
	},
};
