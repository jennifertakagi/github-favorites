module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "jsx-a11y",
        "react"
    ],
    "rules": {
        // enforces return statements in callbacks of array's methods
        // https://eslint.org/docs/rules/array-callback-return
        "array-callback-return": ["error", {
                "allowImplicit": true
            }
        ],

        // enforces usage of destructuring instead of accessing a property through a member expression
        // https://eslint.org/docs/rules/prefer-destructuring#prefer-destructuring-from-arrays-and-objects-prefer-destructuring
        "prefer-destructuring": ["error", {
                "array": true,
                "object": true
            },
            {
                "enforceForRenamedProperties": false
            }
        ],

        // specify curly brace conventions for all control statements: multiline
        // https://eslint.org/docs/rules/curly#require-following-curly-brace-conventions-curly
        "curly": ["error", "multi-line"],

        // enforce one true brace style
        // https://eslint.org/docs/rules/brace-style#require-brace-style-brace-style
        "brace-style": ["error", "1tbs", {
                "allowSingleLine": true
            }
        ],

        // enforce that class methods use "this"
        // https://eslint.org/docs/rules/class-methods-use-this
        "class-methods-use-this": ["error", {
                "exceptMethods": []
            }
        ],

        // disallow duplicate names in class members
        // https://eslint.org/docs/rules/no-dupe-class-members#disallow-duplicate-name-in-class-members-no-dupe-class-members
        "no-dupe-class-members": ["error"],

        // require method and property shorthand syntax for object literals
        // https://eslint.org/docs/rules/object-shorthand
        "prefer-arrow-callback": ["error", {
                "allowNamedFunctions": false,
                "allowUnboundThis": true
            }
        ],

        // enforces parentheses around arrow function parameters regardless of arity
        // https://eslint.org/docs/rules/arrow-parens#require-parens-in-arrow-function-arguments-arrow-parens
        "arrow-parens": ["error", "always", {
                "requireForBlockBody": true
            }
        ],

        // enforce or disallow the use of braces around arrow function body
        // https://eslint.org/docs/rules/arrow-body-style#require-braces-in-arrow-function-body-arrow-body-style
        "arrow-body-style": ["error", "as-needed", {
                "requireReturnForObjectLiteral": false
            }
        ],

        // disallow reassignment of function parameters except for specific exclusions
        // https://eslint.org/docs/rules/no-param-reassign.html
        "no-param-reassign": ["error", {
                "props": true,
                "ignorePropertyModificationsFor": []
            }
        ],

        // require that all imports from a single module exists in a single import statement
        // https://eslint.org/docs/rules/no-duplicate-imports#disallow-duplicate-imports-no-duplicate-imports
        "no-duplicate-imports": ["error", {
                "includeExports": false
            }
        ],

        // report any imports that come after non-import statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        "import/first": ["error", "absolute-first"],

        // forbid the use for any extension
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        "import/extensions": ["error"],

        // specify whether double or single quotes should be used
        // https://eslint.org/docs/rules/quotes#enforce-the-consistent-use-of-either-backticks-double-or-single-quotes-quotes
        "quotes": ["error", "single", {
                "avoidEscape": true,
                "allowTemplateLiterals": false
            }
        ],

        // disallow the usage of + operators with strings
        // https://eslint.org/docs/rules/prefer-template#suggest-using-template-literals-instead-of-string-concatenation-prefer-template
        "prefer-template": ["error"],
        
        // maintain consistency around the spacing inside of template literals
        // https://eslint.org/docs/rules/template-curly-spacing#enforce-usage-of-spacing-in-template-strings-template-curly-spacing
        "template-curly-spacing": ["error", "never"],

        // disallow use of the Object constructor
        // https://eslint.org/docs/rules/no-new-object#disallow-object-constructors-no-new-object
        "no-new-object": ["error"],

        // enforces the use of the shorthand syntax
        // https://eslint.org/docs/rules/object-shorthand#require-object-literal-shorthand-syntax-object-shorthand
        "object-shorthand": ["error", "always", {
                "avoidQuotes": true,
                "ignoreConstructors": false,
                "avoidExplicitReturnArrows": false
            }
        ],

        // enforce use of dot notation whenever possible
        // https://eslint.org/docs/rules/dot-notation#require-dot-notation-dot-notation
        "dot-notation": ["error", {
                "allowKeywords": true
            }
        ],

        // enforce components without children to be self-closed
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        "react/self-closing-comp": ["error", {
                "component": true,
                "html": true
            }
        ],

        // enforce that all elements that require alternative text have meaningful information to relay back to the end user
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
        "jsx-a11y/alt-text": [2],

        // enforce the closing bracket location for JSX multiline elements
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        "react/jsx-closing-bracket-location": [2, {
                "nonEmpty": "tag-aligned",
                "selfClosing": "tag-aligned"
            }
        ],

        // enforce the closing tag location for multiline JSX elements.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        "react/jsx-closing-tag-location": [2],

        // disallow use of multiple spaces
        // https://eslint.org/docs/rules/no-multi-spaces#disallow-multiple-spaces-no-multi-spaces
        "no-multi-spaces": ["error", {
                "ignoreEOLComments": false
            }
        ],

        // enforce or forbid spaces after the opening bracket, before the closing bracket, before the closing
        // bracket of self-closing elements, and between the angle bracket and slash of JSX closing or self-closing elements.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        "react/jsx-tag-spacing": [2, {
                "closingSlash": "never",
                "beforeSelfClosing": "always",
                "afterOpening": "never",
                "beforeClosing": "allow"
            }
        ],

        // enforces coding style that user-defined JSX components are defined and referenced in PascalCase.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        "react/jsx-pascal-case": [2],

        // warn if an element uses an Array index in its key.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        "react/no-array-index-key": [2],

        // specify whether double or single quotes should be used in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        "jsx-quotes": ["error", "prefer-double"],

        // enforce or disallow spaces inside of curly braces in JSX attributes and expressions
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        "react/jsx-curly-spacing": [ 2, { "when": "never" }],

        // prevent missing parentheses around multiline JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        "react/jsx-wrap-multilines": [2, {
                "declaration": "parens",
                "assignment": "parens",
                "return": "parens",
                "arrow": "parens",
                "condition": "ignore",
                "logical": "ignore",
                "prop": "ignore"
            }
        ],

        // enforce boolean attributes notation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        "react/jsx-boolean-value": [2],

        // require the use of === and !==
        // https://eslint.org/docs/rules/eqeqeq
        "eqeqeq": ["error", "always"],

        // enforces a minimum and/or maximum identifier length convention.
        // https://eslint.org/docs/rules/id-length#enforce-minimum-and-maximum-identifier-lengths-id-length
        "id-length": ["error"],

        // require camel case names
        // https://eslint.org/docs/rules/camelcase#require-camelcase-camelcase
        "camelcase": ["error", {
                "ignoreImports": true,
                "ignoreGlobals": true,
                "properties": "never",
                "ignoreDestructuring": false
            }
        ],

        // disallow nested ternary expressions
        // https://eslint.org/docs/rules/no-nested-ternary#disallow-nested-ternary-expressions-no-nested-ternary
        "no-nested-ternary": ["error"],

        // specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        "max-len": ["error", 100, 2, {
                "ignoreUrls": true,
                "ignoreComments": false,
                "ignoreRegExpLiterals": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true
            }
        ],

        // requires constructor names to begin with a capital letter
        // https://eslint.org/docs/rules/new-cap#require-constructor-names-to-begin-with-a-capital-letter-new-cap
        "new-cap": ["error", {
                "newIsCap": true,
                "capIsNew": true,
                "properties": true
            }
        ],

        // disallow un-paren'd mixes of different operators
        // https://eslint.org/docs/rules/no-mixed-operators
        "no-mixed-operators": ["error", {
                "allowSamePrecedence": false
            }
        ],

        // disallow usage of __iterator__ property
        // https://eslint.org/docs/rules/no-iterator#disallow-iterator-no-iterator
        "no-iterator": ["error"],

        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        "no-restricted-syntax": ["error", {
                "selector": "ForInStatement",
                "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
            }, {
                "selector": "ForOfStatement",
                "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
            }
        ],

        // require or disallow use of semicolons instead of ASI
        // https://eslint.org/docs/rules/semi#require-or-disallow-semicolons-instead-of-asi-semi
        "semi": ["error", "always"],

        // suggest using of const declaration for variables that are never modified after declared
        // https://eslint.org/docs/rules/prefer-const#suggest-using-const-prefer-const
        "prefer-const": ["error", {
                "destructuring": "any",
                "ignoreReadBeforeAssign": true
            }
        ],

        // disallow modifying variables that are declared using const
        // https://eslint.org/docs/rules/no-const-assign#disallow-modifying-variables-that-are-declared-using-const-no-const-assign
        "no-const-assign": ["error"],

        // require let or const instead of var
        // https://eslint.org/docs/rules/no-var#require-let-or-const-instead-of-var-no-var
        "no-var": ["error"],

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        // https://eslint.org/docs/rules/no-undef#disallow-undeclared-variables-no-undef
        "no-undef": ["error"],
        
        // disallow declaration of variables that are not used in the code
        // https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars
        "no-unused-vars": ["error", {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": true
            }
        ],
        
        // prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        "react/jsx-uses-react": [2],

        // prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        "react/jsx-uses-vars": [2],

        // disallow use of chained assignment expressions
        // https://eslint.org/docs/rules/no-multi-assign
        "no-multi-assign": ["error"],
        
        // allow just one var statement per function
        // https://eslint.org/docs/rules/one-var#enforce-variables-to-be-declared-either-together-or-separately-in-functions-one-var
        "one-var": ["error", "always"],

        // require padding inside curly braces
        //https://eslint.org/docs/rules/object-curly-spacing#enforce-consistent-spacing-inside-braces-object-curly-spacing
        "object-curly-spacing": ["error", "always"],

        // require spaces around operators
        // https://eslint.org/docs/rules/space-infix-ops#require-spacing-around-infix-operators-space-infix-ops
        "space-infix-ops": ["error"],

        // enforce newline at the end of file, with no multiple empty lines
        // https://eslint.org/docs/rules/eol-last#require-or-disallow-newline-at-the-end-of-files-eol-last
        "eol-last": ["error", "always"],

        // disallow trailing whitespace at the end of lines
        // https://eslint.org/docs/rules/no-trailing-spaces#disallow-trailing-whitespace-at-the-end-of-lines-no-trailing-spaces
        "no-trailing-spaces": ["error", {
                "skipBlankLines": false,
                "ignoreComments": false
            }
        ],

        // require a space before & after certain keywords
        // https://eslint.org/docs/rules/keyword-spacing#enforce-consistent-spacing-before-and-after-keywords-keyword-spacing
        "keyword-spacing": ["error", {
                "before": true,
                "after": true
            }
        ],

        // enforce spacing inside array brackets
        // https://eslint.org/docs/rules/array-bracket-spacing#disallow-or-enforce-spaces-inside-of-brackets-array-bracket-spacing
        "array-bracket-spacing": ["error", "never"],

        // this option sets a specific tab width for your code
        // https://eslint.org/docs/rules/indent
        "indent": ["error", 2],

        // require or disallow spaces inside parentheses
        // https://eslint.org/docs/rules/space-in-parens#disallow-or-enforce-spaces-inside-of-parentheses-space-in-parens
        "space-in-parens": ["error", "never"],

        // require or disallow a space immediately following the // or /* in a comment
        // https://eslint.org/docs/rules/spaced-comment
        "spaced-comment": ["error", "always"],
    }
}

