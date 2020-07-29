export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            //? background: if you returned the same 
            //? state as before, redux will not update the
            //? rest of the app
            //! We are returning a new array here 
            //! to mutating the original one.
            //! so redux undertand that we made a change.
            return [...state, action.payload]
        default:
            return state
    }
}