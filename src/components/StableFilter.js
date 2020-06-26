import React from 'react'

const StableFilter = ({isSelected, onCheckboxChange}) => {
    return (
        <div className="form-check">
        <label>
          <input
            type="checkbox"
            // name='Stable Only'
            checked={isSelected}
            onChange={onCheckboxChange}
            className="form-check-input"
          />
          Stable Only
        </label>
      </div>
    )
}

export default StableFilter
