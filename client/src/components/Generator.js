import React from "react"
import PropTypes from "prop-types"

export default function Generator({ getRandomMBI, randomMBI }) {
  return (
    <div className="card">
      <div className="card-header">Generate a random MBI</div>
      <div className="card-body py-4">
        <div className="row">
          <div className="col-3">
            <button
              className="btn btn-primary w-100 text-white"
              onClick={getRandomMBI}
            >
              Generate
            </button>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              value={randomMBI}
              aria-label="Disabled input"
              disabled
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Generator.propTypes = {
  getRandomMBI: PropTypes.func.isRequired,
  randomMBI: PropTypes.string.isRequired,
}
