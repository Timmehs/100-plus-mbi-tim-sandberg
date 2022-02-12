const express = require("express")
const path = require("path")
const morgan = require("morgan")
const validateMBI = require("./util/validate-mbi.js")
const generateMBI = require("./util/generate-mbi.js")

const PORT = process.env.PORT || 3001

const app = express()

// Middleware
app.use(morgan("tiny"))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, "../client/build")))

// Routes
app.get("/generate", (_req, res) => res.json({ mbi: generateMBI() }))

app.post("/verify", (req, res) =>
  res.json({ isValid: validateMBI(req.body.mbi) })
)

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
