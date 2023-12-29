module.exports = {
    "transform": {
        "^.+\\.jsx?$": "./wrapper.js"
      },
      "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js|jsx)",
        "**/?(*.)+(spec|test).+(ts|tsx|js|jsx)",
      ],
  }