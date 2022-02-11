// Generate MBI in the form: https://www.cms.gov/medicare/new-medicare-card/understanding-the-mbi-with-format.pdf

const VALID_LETTERS = [
  "A",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
]

function randomInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a).toString()
}

// Random letter from A-Z
function randomAlpha() {
  const randomLetterIndex = randomInt(0, VALID_LETTERS.length - 1)
  return VALID_LETTERS[randomLetterIndex]
}

export default function generateMBI() {
  const c = () => randomInt(1, 9)
  const n = () => randomInt(0, 9)
  const an = () => (Math.random() < 0.5 ? randomInt(0, 9) : randomAlpha())
  const a = randomAlpha

  const mbi = [c, a, an, n, a, an, n, a, a, n, n]

  return mbi.map((f) => f()).join("")
}
