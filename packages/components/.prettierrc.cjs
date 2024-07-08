'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
        printWidth: 120,
      },
    },
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
