import React from 'react'

const AlgorithmItem = ({algorithm, showProCon}) => {
    const {name, imageUrl, pros, cons, averagePerformance, addedOn, description, moreDetailsUrl} = algorithm;

    return (
        <div className='algorithmItem'>
            {name && <h2>{name}</h2>}        
            {imageUrl && 
            <img
                className='img'
                src={imageUrl}
                alt={name}
            />}

            <h3>Description</h3> 
            {description && <p>{description}</p>}
            
            <h3>Big O Notation</h3>
            {averagePerformance && <p>{averagePerformance}</p>}
            
            {showProCon && (
                <div  style={{clear:'left'}}>
                    <h3>Pros</h3>
                    {pros && pros.length > 0 && (
                        <ul>
                            {pros.map((pro,idx) => (
                                <li key={idx} >{pro}</li>
                            ))}
                        </ul>
                    )}
            
                    <h3>Cons</h3>
                    {cons && cons.length > 0 && (
                        <ul>
                            {cons.map((con,idx) => (
                                <li key={idx} >{con}</li>
                            ))}
                        </ul>
                    )}
                </div>    
            )}

            {addedOn && <p style={{clear:'left'}}>Added: {addedOn}</p>}
        
            
            {moreDetailsUrl && (
                <a href={moreDetailsUrl} target='_blank' rel="noopener noreferrer" > MORE DETAILS</a>
            )}
            
        </div>
    )
}

export default AlgorithmItem
