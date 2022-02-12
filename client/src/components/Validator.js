import React, { useMemo } from "react"
import PropTypes from "prop-types"

export default function Validator({
  newMBI,
  handleTextChange,
  validateMBI,
  isValid,
}) {
  const validationText = useMemo(() => {
    if (isValid !== null) {
      return `MBI is ${isValid ? "valid" : "invalid"}`
    } else {
      return ""
    }
  }, [isValid])

  const validationIconClass = useMemo(() => {
    if (isValid !== null) {
      return isValid
        ? "bi-check-circle-fill text-success"
        : "bi-x-circle-fill text-danger"
    } else {
      return "d-none"
    }
  }, [isValid])

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col">Validate an MBI</div>
          <div className="col d-flex justify-content-end">
            <span className={`fw-bold text-${isValid ? "success" : "danger"}`}>
              {validationText}
              <i className={`bi ms-2 ${validationIconClass}`} />
            </span>
          </div>
        </div>
      </div>
      <div className="card-body py-4">
        <div className="row">
          <div className="col">
            <div style={{ position: "relative" }}>
              <input
                className="form-control"
                type="text"
                value={newMBI}
                onChange={handleTextChange}
                aria-label="MBI Validation input"
              />
            </div>
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary w-100 text-white"
              onClick={validateMBI}
              disabled={!newMBI}
            >
              Validate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Validator.propTypes = {
  newMBI: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  validateMBI: PropTypes.func.isRequired,
  isValid: PropTypes.any,
}
