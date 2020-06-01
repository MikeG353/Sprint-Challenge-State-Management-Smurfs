import React from 'react'

const Smurf = props => {
    console.log(props, 'from Smurf')
    
    return (
        <>
            <h2>{props.smurf.name}</h2>
        </>
    )
}


export default Smurf;