import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

export const fetchPostsAndUsers = () => async dispatch => {
    console.log('About to fetch posts');
    await dispatch(fetchPosts()); // when we call an action creator from an action creator we need to dispatch it.
    console.log('fetched post');
}


export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data}); //use redux thunk to return an async function to tne reducers

};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
};


// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };
//
//
// const _fetchUser = _.memoize(async (id, dispatch) => {        // "_" on the beggining means that it is a private function and you shoukd not be mess with it
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });