import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { fetchPosts } from '../store/reducers/posts/PostsActionCreator';

export default function PostsPage(): React.ReactElement {
  const { posts } = useSelector((state: RootState) => state.PostsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({}));
  }, []);

  return (
    <div>
      <Helmet>
        <title> Тайтл с страницы Todos</title>
      </Helmet>
      {posts.map((post, key) => (
        <p key={key}>{post.title}</p>
      ))}
    </div>
  );
}
