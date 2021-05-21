import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { SET_POSTS } from './PostsReducer';

function setPosts(data): AnyAction {
  //console.log('data loaded');
  return {
    type: SET_POSTS,
    posts: data,
  };
}

export function fetchPosts(params) {
  return function(dispatch) {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        dispatch(setPosts(data));
      }).catch((e) => {
      console.log(e);
    });
  };
}
