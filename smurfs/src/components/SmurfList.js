import React from 'react'
import Smurf from './Smurf'

const SmurfList = props => {
    console.log(props)
    return (
        <button onClick={props.getSmurfList()}>Get Smurf Data</button>
        // <>
        //     {props.smurfs.map(smurf => (
        //         <Smurf name={smurf.name} />
        //     ))}
        // </>
    )
}

export default SmurfList