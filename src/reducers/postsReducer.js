//! state: whatever was returned from the reducer 
//! last time it ran
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}