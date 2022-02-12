const validateMBI = require("../server/util/validate-mbi.js")
const generateMBI = require("../server/util/generate-mbi.js")

describe("Generating MBI code", () => {
  it("generates a code 11 characters long", () => {
    expect(generateMBI().length).toBe(11)
  })

  it("passes validation", () => {
    const code = generateMBI()
    expect(validateMBI(code)).toBe(true)
  })
})
