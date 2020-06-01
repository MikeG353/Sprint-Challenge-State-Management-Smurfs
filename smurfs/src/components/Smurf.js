import React from 'react'
import { connect } from 'react-redux'

const Smurf = props => {
    console.log(props, 'from Smurf')
    
    return (
        <>
            <h2>{props.smurf.name}</h2>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurf: state.smurf
    }
}

export default connect(mapStateToProps, {})(Smurf);