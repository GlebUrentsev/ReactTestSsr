import { combineReducers } from 'redux'
import PostsReducer, { PostsState } from './posts/PostsReducer';

export type RootState = {
  PostsReducer: PostsState
}

const rootReducer = combineReducers({
  PostsReducer
});

export default rootReducer
