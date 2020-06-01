import {
    GET_SMURF_LIST_START,
    GET_SMURF_LIST_SUCCESS,
    GET_SMURF_LIST_FAIL
} from '../actions'

const initialSmurfList = {
    smurfs : [],
    error: ''
}

function smurfReducer(state = initialSmurfList, action) {
    switch (action.type) {
        case GET_SMURF_LIST_START:
            console.log('start fires from reducer')
            return{
                ...state,
                error:''
            };
        case GET_SMURF_LIST_SUCCESS:
            console.log(action.payload, "success fires")
            return {
                ...state,
                smurfs : action.payload,                
                error: ''
            }
        case GET_SMURF_LIST_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}
export default smurfReducer