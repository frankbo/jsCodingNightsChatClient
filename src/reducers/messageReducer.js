function messageReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return state.concat([action.message]);
        default:
            return state;
    }
}


export default messageReducer;
