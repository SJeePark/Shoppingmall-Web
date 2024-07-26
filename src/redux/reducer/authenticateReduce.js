let initialState = {}

function authenticateReduce(state=initialState, action){
    let {type, payload} = action
    switch(type){
        case "LOGIN_SUCCESS":
            return {...state, id:payload.id, password: payload.password, authenticate: true}
        default:
            return{...state}
    }
}

export default authenticateReduce