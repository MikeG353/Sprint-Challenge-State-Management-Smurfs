import React from 'react'
import { connect } from 'react-redux'
import { getSmurfList } from '../actions'
import Smurf from './Smurf'

const SmurfList = props => {
    console.log(props)
    return (
        <>
        <button onClick={e => {
            e.preventDefault()
            props.getSmurfList()
        }}>Get Smurf Data</button>
        <p>{props.error.message}</p>
        <div className="container" >
        {
            props.smurfs.map(smurf => {
                console.log(smurf,' is a smurf')
                return <Smurf smurf={smurf} key={smurf.id}/>
            })
        }
        </div>
        </>
    )
}
const mapStateToProps = state => {
    console.log('from smurf list', state)
    return {
        ...state
    }
}
export default connect(mapStateToProps, { getSmurfList })(SmurfList)