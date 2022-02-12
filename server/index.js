import express from "express"
import morgan from "morgan"
import validateMBI from "./util/validate-mbi.js"
import generateMBI from "./util/generate-mbi.js"

const PORT = process.env.PORT || 3001

const app = express()

// Middleware
app.use(morgan("tiny"))
app.use(express.json())

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
