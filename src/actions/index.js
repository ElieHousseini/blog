//! ACTION CREATOR
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts')

        // //! WE DO NOT NEED TO RETURNS AN ACTION
        // return {
        //     type: 'FETCH_POSTS',
        //     payload: promise
        // }
        dispatch({ type: 'FETCH_POSTS', payload: response })
    }
}