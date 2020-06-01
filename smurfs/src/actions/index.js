import axios from 'axios'

export const GET_SMURF_LIST_START = 'GET_SMURF_LIST_START'
export const GET_SMURF_LIST_SUCCESS = 'GET_SMURF_LIST_SUCCESS'
export const GET_SMURF_LIST_FAIL = 'GET_SMURF_LIST_FAIL'

export const getSmurfList = () => dispatch => {
    dispatch({ type: GET_SMURF_LIST_START });
    axios
    .get('localhost:3333/smurfs')
    .then(res => {
        console.log(res, 'from actions')
        dispatch({ type: GET_SMURF_LIST_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: GET_SMURF_LIST_FAIL, payload: err }))
}