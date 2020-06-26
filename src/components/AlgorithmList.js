import React from 'react'
import AlgorithmItem from './AlgorithmItem'

const AlgorithmList = ({displayData}) => {
    return (
        <div>
            <h1>Algorithm List</h1>
            {displayData && displayData.length>0 && (
                displayData.map((algorithm, idx) => (
                    <AlgorithmItem algorithm={algorithm} key={idx}/>
                ) )
            )}
        </div>
    )
}

export default AlgorithmList
