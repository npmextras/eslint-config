const defaultRules = {
    "consistent-return": "off",
    "no-shadow": "off",
    "no-unused-expressions": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "no-empty-pattern": "off",
    "no-plusplus": "off",
    "sort-imports": [
        "error",
        {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
    ],
    "sort-keys": "off",
    "sort-keys-fix/sort-keys-fix": "warn",
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "no-void": "off",
    "no-param-reassign": [
        "error",
        {
            props: true,
            ignorePropertyModificationsFor: ["draft"],
        },
    ],
}

const typescriptRules = {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": [
        "error",
        {argsIgnorePattern: "^_", varsIgnorePattern: "^_"},
    ],
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
}

const jestRules = {
    "jest/no-standalone-expect": "off",
}

const testRules = {
    "jest/no-disabled-tests": "off",
    "jest/no-commented-out-tests": "off",
    "@typescript-eslint/no-explicit-any": "off",
}

module.exports = {
    extends: [
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
    ],
    env: {
        node: true,
        mocha: true,
        es6: true,
    },
    overrides: [
        {
            files: ["*.spec.{ts,tsx}"],
            rules: {
                ...testRules,
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "sort-keys-fix",
        "sort-destructure-keys",
        "typescript-sort-keys",
    ],
    rules: {
        ...defaultRules,
        ...typescriptRules,
        ...jestRules,
    },
}
