import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postNewSmurf } from '../actions'

const SmurfForm = props=> {
    // form field state
    const [newSmurfName, setNewSmurfName] = useState("Name")
    const [newSmurfAge, setNewSmurfAge] = useState("Age")
    const [newSmurfHeight, setNewSmurfHeight] = useState("Height")
    
    // maybe write a handler for this in reducer and pass it in via props?
    const handleNameChange = e => {
        setNewSmurfName(e.target.value);
    }
    const handleAgeChange = e => {
        setNewSmurfAge(e.target.value);
    }
    const handleHeightChange = e => {
        setNewSmurfHeight(e.target.value);
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            // dispatch an ADD function here
            props.postNewSmurf(newSmurfName, newSmurfAge, newSmurfHeight)
            setNewSmurfName("Name")
            setNewSmurfAge("Age")
            setNewSmurfHeight("Height")
        }}>
            <input
                onChange={handleNameChange}
                type="text"
                name="newSmurfName"
                value={newSmurfName}
            />
            <input
                onChange={handleAgeChange}
                type="text"
                name="newSmurfAge"
                value={newSmurfAge}
            />
            <input
                onChange={handleHeightChange}
                type="text"
                name="newSmurfHeight"
                value={newSmurfHeight}
            />
            <button>Add Smurf</button>
           
        </form>
    )
}
const mapStateToProps = state => {
    return {
        ...state
    }
}


export default connect(mapStateToProps, {postNewSmurf})(SmurfForm)