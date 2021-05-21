import { RouteConfig } from 'react-router-config';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import { fetchPosts } from './store/reducers/posts/PostsActionCreator';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/posts',
    component: PostsPage,
    fetchData: [fetchPosts]
  }
]

export default routes;
