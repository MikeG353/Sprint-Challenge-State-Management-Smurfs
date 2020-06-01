import React from 'react'
import smurfReducer from '../reducers';

const Smurf = props => {
    console.log(props, 'from Smurf')
    
    return (
        <>
            <h2>{props.smurf[0].name}</h2>
        </>
    )
}


export default Smurf;