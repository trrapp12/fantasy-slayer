/**
 * @jest-environment jsdom
 */

 const { isDevelopmentEnvironment } = require('../js/sw.js')

 describe("isDevelopmentEnvironment()", () => {
    it("should return true when location.hostname = localhost", () => {
        const result = isDevelopmentEnvironment();
        expect(result).toBe(true);
    })

    it("should return true if location.hostname = 127.0.0.1", () => {
        const result = isDevelopmentEnvironment();
        expect(result).toBe(true);
    })
 })

