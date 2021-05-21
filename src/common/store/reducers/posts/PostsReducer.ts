import { AnyAction } from 'redux';

export type PostsState = {
  posts: any[];
  isLoading: boolean;
}

const defaultState: PostsState = {
  posts: [],
  isLoading: false,
};

export const SET_POSTS = 'SET_POSTS'

export default function PostsReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state;
  }
}
