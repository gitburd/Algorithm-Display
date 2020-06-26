import React from 'react'

const AlgorithmItem = ({algorithm, showProCon}) => {
    const {name, imageUrl, pros, cons, averagePerformance, addedOn, description, moreDetailsUrl} = algorithm;

    return (
        <div>
            {name && <h2>{name}</h2>}        
            {imageUrl && 
            <img 
                src={imageUrl}
                alt={name}
                style={{
                    width:'200px'
                }}
            />}

            {description && <p>{description}</p>}
            
            <h3>Big O Notation</h3>
            {averagePerformance && <p>{averagePerformance}</p>}
            
            {showProCon && (
                <div>
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

            {addedOn && <p>Added: {addedOn}</p>}
        
            
            {moreDetailsUrl && (
                <a href={moreDetailsUrl} target='_blank' rel="noopener noreferrer" > MORE DETAILS</a>
            )}
            
        </div>
    )
}

export default AlgorithmItem
