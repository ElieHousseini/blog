//! ACTION CREATOR

import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

//! The method was written that way, to make sure that redux request data only 
//! at the number of iniq users. 
//? Example: 
//? 10 requests for searching 10 different usenames

    //! it's better to put one big action creator that calls small action creators
    //! instead of putting everything here
    //! Calling an action creator from an action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //! await: wait for API request to be completed and then move on
    //! getting the data
    await dispatch(fetchPosts())

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        //! foreach will run for every uniq ID
        .forEach(id => dispatch(fetchUser(id)))
        //! we put .value() to execute
        .value()
}

export const fetchPosts = () =>
    //! dispatch: to update data
    //! getState: to get the data
    //! we have total control over changing and getting info 
    //! out of our redux store because we are returning a function
    async dispatch => {
        const response = await jsonPlaceholder.get('/posts')
        //! fetchdata response is in the payload property
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
}

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch)
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({ type: 'FETCH_USER', payload: response.data })
// })
