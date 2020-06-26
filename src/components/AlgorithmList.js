import React from 'react'
import Data from '../data/data'
import AlgorithmItem from './AlgorithmItem'

const AlgorithmList = () => {
    console.log(Data)
    return (
        <div>
            <h1>Algorithm List</h1>
            {Data && Data.length>0 && (
                Data.map((algorithm, idx) => (
                    <AlgorithmItem algorithm={algorithm} key={idx}/>
                ) )
            )}

        </div>
    )
}

export default AlgorithmList
