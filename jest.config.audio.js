// jest.config.audio.js
module.exports = {
    transform: {
      "^.+\\.jsx?$": "./wrapper.js",
    },
    testMatch: ["./tests/audio.test.js"],
  };
  