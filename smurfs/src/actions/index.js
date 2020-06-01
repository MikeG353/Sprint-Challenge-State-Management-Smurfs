import axios from 'axios'

export const GET_SMURF_LIST_START = 'GET_SMURF_LIST_START'
export const GET_SMURF_LIST_SUCCESS = 'GET_SMURF_LIST_SUCCESS'
export const GET_SMURF_LIST_FAIL = 'GET_SMURF_LIST_FAIL'

const url = "http://localhost:3333/smurfs"

export const getSmurfList = () => dispatch => {
    
    dispatch({ type: GET_SMURF_LIST_START });
    console.log('getSmurfList fires from action')
    axios
        .get(url)
        .then(res => {
        console.log(res, 'from actions')
        dispatch({ type: GET_SMURF_LIST_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_SMURF_LIST_FAIL, payload: err }))
}

export const postNewSmurf = (name, age, height) => dispatch => {
    dispatch({ type: 'POST_NEW_SMURF_START' });

    axios
        .post(url, {name, age, height})
}