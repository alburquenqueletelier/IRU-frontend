module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict":0,
        "no-unused-vars": 0,
        "no-console": 1,
        "no-mixed-spaces-and-tabs": 0,
        "no-debugger": 0, 
        "semi": ["error", "always"],
        "allowImportExportEverywhere": 0,
        "indent": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "comma-dangle": [1, { //when to use the last comma
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "ignore",
        }],
        "react/prop-types": "off"
    }
}
