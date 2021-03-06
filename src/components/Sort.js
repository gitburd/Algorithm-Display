import React from 'react'

const Sort = ({handleSortChange, selectedSort}) => {
    
    const handleChange = (e) => {
        handleSortChange(e.target.value)
    }

    return (
        <div>
            <form>
                <label className="form-check sort">Sort: </label>
                <div className="form-check sort">
                <label>
                    <input
                    type="radio"
                    value="default"
                    checked={selectedSort === "default"}
                    onChange={handleChange}
                    className="form-check-input"
                    />
                    Default
                </label>
                </div>

                <div className="form-check sort" >
                <label>
                    <input
                    type="radio"
                    value="az"
                    checked={selectedSort === "az"}
                    onChange={handleChange}
                    className="form-check-input"
                    />
                    A-Z
                </label>
                </div>

                <div className="form-check sort">
                <label>
                    <input
                    type="radio"
                    value="dateAdded"
                    checked={selectedSort === "dateAdded"}
                    onChange={handleChange}
                    className="form-check-input"
                    />
                    Date added
                </label>
                </div>
            </form>
        </div>
    )
}

export default Sort
