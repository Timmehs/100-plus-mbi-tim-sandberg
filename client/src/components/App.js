import logo from "../images/100plus-logo.svg"
import "../styles/app.scss"

function App() {
  return (
    <div className="container pt-5" style={{ maxWidth: "650px" }}>
      <div className="row">
        <div className="col-12">
          <img src={logo} height="42" alt="100 Plus Logo" />
        </div>
        <div className="col-12">
          <h1>MBI Helper</h1>
        </div>
      </div>
    </div>
  )
}

export default App
