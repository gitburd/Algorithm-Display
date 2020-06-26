import React from 'react'

const StableFilter = ({isSelected,  handleCheckboxChange}) => {
    return (
        <div className="form-check">
        <label>
          <input
            type="checkbox"
            id='stableOnly'
            checked={isSelected}
            onChange={handleCheckboxChange}
            className="form-check-input"
          />
          Stable Only
        </label>
      </div>
    )
}

export default StableFilter
