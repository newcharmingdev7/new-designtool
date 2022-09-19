'use strict';

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order', // https://github.com/constverum/stylelint-config-rational-order
    // 'stylelint-prettier/recommended',
    // 'stylelint-config-prettier-scss',
  ],
  rules: {
    // =============================
    // HDS team's specific overrides
    // =============================

    // we've decided to use the 'legacy' notation because we're all more used to it
    // see: https://stylelint.io/user-guide/rules/list/color-function-notation/
    'color-function-notation': 'legacy',

    // we've decided to disable this rule because it was fixing code in a way we didn't want to
    // see: https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties/
    'declaration-block-no-redundant-longhand-properties': null,

    // we've decided to disable this rule because there may be cases in which we declare a Sass variable inline with other declarations and this would add an empty line after it
    // see: https://stylelint.io/user-guide/rules/list/declaration-empty-line-before/
    'declaration-empty-line-before': null,

    // we've decided to never have spaces inside the parentheses of functions (we all prefer this way, for readability)
    // see: https://stylelint.io/user-guide/rules/list/function-parentheses-space-inside/
    'function-parentheses-space-inside': 'never',

    // we've agreed that in some cases is useful to add extra visual space between blocks to better separate/group content
    // see: https://stylelint.io/user-guide/rules/list/max-empty-lines/
    'max-empty-lines': 2,

    // we've agreed to not enforce a limit on the lines lenght (we embed SVGs so very long strings + plus modern browsers can esily soft-wrap code)
    // see: https://stylelint.io/user-guide/rules/list/max-line-length/
    'max-line-length': null,

    // we've decided to disable this rule because we want to be able to order our declarations based on different criteria, if/when needed
    // see: https://stylelint.io/user-guide/rules/list/no-descending-specificity/
    'no-descending-specificity': null,

    // we've decided to disable this rule because we want to be able to order our declarations based on different criteria, if/when needed
    // see: https://stylelint.io/user-guide/rules/list/no-duplicate-selectors/
    'no-duplicate-selectors': null,

    // we all had preference on always having leading zeros (for readability)
    // see: https://stylelint.io/user-guide/rules/list/number-leading-zero/
    'number-leading-zero': 'always',

    // we've decided to enforce the `.hds|.mock` naming convention (plus, using the default stylelint rule one doesn't work for us, because we're using BEM)
    // see: https://stylelint.io/user-guide/rules/list/selector-class-pattern/
    'selector-class-pattern': [
      // found this pattern here: https://github.com/humanmade/coding-standards/pull/199
      // '^(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$',
      '^hds-(?<block>(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)(?<element>(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*))?(?<modifier>(?:--[a-z][a-z0-9]*)(?:-[a-z0-9]+)*)?$|^mock-(?:[a-z][a-z0-9]*)$',
      { resolveNestedSelectors: true },
    ],

    // we all preferred to allow redundant values in declarations (for readability)
    // see: https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values/
    'shorthand-property-no-redundant-values': null,

    // we've decide to use "double" quotes (notice: this is the default rule, but better to declare it explicitly so it's evident is intentional)
    // see: https://stylelint.io/user-guide/rules/list/string-quotes/
    'string-quotes': 'double',

    // we've decided to have this custom rule because there's an issue with "currentColor" (https://github.com/stylelint/stylelint/issues/5863)
    // see: https://stylelint.io/user-guide/rules/list/value-keyword-case/
    'value-keyword-case': ['lower', { ignoreKeywords: ['currentColor'] }],

    // -------------

    // we prefer to be explicit when a mixin is called
    // see: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    // we prefer to be explicit and use parenthesis (more similar to the way "if"s are declared in JavaScript)
    // see: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md
    'scss/at-rule-conditional-no-parentheses': null,

    // we've decided to disable this rule because we have a lot of comment blocks that use empty lines for formatting
    'scss/comment-no-empty': null,

    // we've decided to not enforce this rule, there are cases where it makes sense (e.g. comments within blocks of code)
    // see: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md
    'scss/double-slash-comment-empty-line-before': null,

    // we've decided to disable this for now, and follow-up on a separate ticket
    // see: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md
    'scss/no-global-function-names': null,

    // we've decided to turn off this rule because it's buggy and triggers an error that doesn't make sense
    // see: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md
    // (many issues https://github.com/stylelint-scss/stylelint-scss/issues?q=is%3Aissue+is%3Aopen+%22operator-no-unspaced%22)
    'scss/operator-no-unspaced': null,

    // =============================
    // PRETTIER OVERRIDES:
    // =============================
    // 'indentation': null, // to test with prettier
    // "indentation": 2,
    // "string-quotes": "double",
  },
};
