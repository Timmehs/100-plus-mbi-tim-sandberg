import express from 'express'
import validateMBI from './util/validate-mbi.js'
import generateMBI from './util/generate-mbi.js'

const PORT = process.env.PORT || 3001

const app = express()

app.get("/generate", (req, res) => {
  res.json({ mbi: generateMBI() })
})

app.get("/verify", (req, res) => {
  res.json({ valid: validateMBI() })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})