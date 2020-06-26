import React from 'react'

const AlgorithmItem = ({algorithm}) => {
    const {name} = algorithm;

    return (
        <div>
            {name && (
                <h2>{name}</h2>
            )}        
        </div>
    )
}

export default AlgorithmItem
