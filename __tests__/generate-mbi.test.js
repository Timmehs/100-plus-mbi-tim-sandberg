import generateMBI from "../server/util/generate-mbi"
import validateMBI from "../server/util/validate-mbi"

describe("Generating MBI code", () => {
  it("generates a code 11 characters long", () => {
    expect(generateMBI().length).toBe(11)
  })

  it("passes validation", () => {
    const code = generateMBI()
    expect(validateMBI(code)).toBe(true)
  })
})
