import express from "express"

const PORT = process.env.PORT || 3001

const app = express()

app.get("/generate", (req, res) => {
  res.json({ data: "Generate endpoint" })
})

app.get("/verify", (req, res) => {
  res.json({ data: "Verify endpoint" })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
