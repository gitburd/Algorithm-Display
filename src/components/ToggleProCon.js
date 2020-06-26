import React from 'react'

const ToggleProCon = ({isSelected,  handleCheckboxChange}) => {
    return (
        <div className="form-check">
        <label>
          <input
            type="checkbox"
            id='showProCon'
            checked={isSelected}
            onChange={handleCheckboxChange}
            className="form-check-input"
          />
          Show Pros & Cons
        </label>
      </div>
    )
}

export default ToggleProCon
