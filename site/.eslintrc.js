module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@next/eslint-plugin-next',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  ignorePatterns: [
    '/src/**/__tests__/*',
    'src/**/*.js',
    'src/**/*containsNullOrUndefined.ts',
    'src/react-app-env.d.ts',
  ],
  rules: {
    /* Règles de typescript-eslint/recommended-requiring-type-checking */
    'no-empty-source': 'off', // a supprimer une fois les scss soit non vide
    'linebreak-style': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'no-unsafe-optional-chaining': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'default-param-last': 'off',
    'function-paren-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-bitwise': 'off',
    'jsx-a11y/label-has-associated-control': 'off', // a effacer
    'jsx-a11y/click-events-have-key-events': 'off', // a effacer
    'jsx-a11y/no-static-element-interactions': 'off', //a effacer
    'jsx-a11y/aria-role': 'off', //a effacer
    'jsx-a11y/anchor-is-valid': 'off', //a effacer
    'no-restricted-exports': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'no-undef': 'off',
    'react/jsx-wrap-multilines': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    '@typescript-eslint/no-misused-promises': 'off',
    semi: ['error', 'always'],
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'max-len': 'off',
    camelcase: 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }], // should add '.ts' if typescript project
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-nested-ternary': 'off',
    'no-mixed-operators': 'off',
    'react/jsx-closing-tag-location': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
