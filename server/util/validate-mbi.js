// Validate MBI is in the form described: https://www.cms.gov/medicare/new-medicare-card/understanding-the-mbi-with-format.pdf

const regex = /^[1-9][A-Z][0-9|A-Z][0-9][A-Z][0-9|A-Z][0-9][A-Z]{2}[0-9]{2}$/

export default function validateMBI(code) {
  return regex.test(code)
}
