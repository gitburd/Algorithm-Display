import React from 'react'
import AlgorithmItem from './AlgorithmItem'
import Data from '../data/data'

const AlgorithmList = ({displayData, showProCon}) => {
    return (
        <div className="algorithm-list">
            <h2>Displaying {displayData && displayData.length} of {Data && Data.length} Algorithms</h2>
            {displayData && displayData.length>0 && (
                displayData.map((algorithm, idx) => (
                    <AlgorithmItem algorithm={algorithm} key={idx} showProCon={showProCon}/>
                ) )
            )}
        </div>
    )
}

export default AlgorithmList
