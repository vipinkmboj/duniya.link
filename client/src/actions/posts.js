import * as api from '../api';

//Action Creators...
export const getPosts = () => async (dispatch) => {

    try { 
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error);
    }
    //const action = { type: 'FETCH_ALL', payload: []};
    //return action;
    //dispatch(action);
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        //const response = await api.updatedPost
        const { data } = await api.updatedPost(id, post);

        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}