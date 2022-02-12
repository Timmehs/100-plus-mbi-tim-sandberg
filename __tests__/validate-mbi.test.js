import validateMBI from "../server/util/validate-mbi"

const VALID_CODE = "1WM7Q31NI90"

describe("Validating MBI codes", () => {
  it("succeeds when given a valid code", () => {
    expect(validateMBI(VALID_CODE)).toBe(true)
  })

  it("fails for codes shorter than 11 characters", () => {
    const shortCode = VALID_CODE.slice(0, 10)
    expect(validateMBI(shortCode)).toBe(false)
  })

  it("fails for codes longer than 11 characters", () => {
    const longCode = VALID_CODE + "1"
    expect(validateMBI(longCode)).toBe(false)
  })

  it("fails if code starts with a zero", () => {
    const malformedCode = "0" + VALID_CODE.slice(1, 11)
    expect(validateMBI(malformedCode)).toBe(false)
  })
})
