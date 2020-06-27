import React from 'react'

const ToggleProCon = ({isSelected,  handleCheckboxChange}) => {
    return (
        <div className="form-check filter">
            <label className="form-check">Display: </label>
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
