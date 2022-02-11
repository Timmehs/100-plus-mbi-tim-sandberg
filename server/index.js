import express from "express"
import morgan from "morgan"
import validateMBI from "./util/validate-mbi.js"
import generateMBI from "./util/generate-mbi.js"

const PORT = process.env.PORT || 3001

const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.get("/generate", (req, res) => {
  res.json({ mbi: generateMBI() })
})

app.post("/verify", (req, res) => {
  const { mbi } = req.body
  console.log(mbi, "mbi")
  res.json({ isValid: validateMBI(req.body.mbi) })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
