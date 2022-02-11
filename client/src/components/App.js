import React, { useState } from "react"
import logo from "../images/100plus-logo.svg"
import "../styles/app.scss"
import axios from "axios"
import Validator from "./Validator"
import Generator from "./Generator"

axios.defaults.headers = {
  "Content-Type": "application/json",
}

function App() {
  const [randomMBI, setRandomMBI] = useState("")
  const [newMBI, setNewMBI] = useState("")
  const [isValid, setIsValid] = useState(null)

  const getRandomMBI = () => {
    axios
      .get("/generate")
      .then(({ data }) => {
        setRandomMBI(data.mbi)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const validateMBI = () => {
    axios
      .post("/verify", { mbi: newMBI })
      .then(({ data }) => {
        console.log(data.isValid)
        setIsValid(data.isValid)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleTextChange = (e) => {
    console.log("change")
    setNewMBI(e.target.value)
  }

  const validatorProps = { newMBI, handleTextChange, validateMBI, isValid }
  const generatorProps = { randomMBI, getRandomMBI }

  return (
    <div className="container pt-5" style={{ maxWidth: "650px" }}>
      <div className="row g-3 d-flex justify-content-center align-items-center">
        <div className="col-12 text-center">
          <img src={logo} height="42" alt="100 Plus Logo" />
          <hr />
        </div>
        <div className="col-12">
          <h1>MBI Helper</h1>
        </div>
        <div className="col-12">
          <Generator {...generatorProps} />
        </div>
        <div className="col-12">
          <Validator {...validatorProps} />
        </div>
      </div>
    </div>
  )
}

export default App
