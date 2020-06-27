import React from 'react'

const StableFilter = ({isSelected,  handleCheckboxChange}) => {
    return (
        <div className="form-check filter">
        <label className="form-check">Filter: </label>
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
