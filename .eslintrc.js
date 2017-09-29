module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "plugins": [
        "dollar-sign"
    ],
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "dollar-sign/dollar-sign": [
            2, "ignoreProperties"
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
