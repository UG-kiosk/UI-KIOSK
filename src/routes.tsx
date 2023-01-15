import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MajorsList } from './modules/Majors';

const routes: RouteObject[] = [
  {
    path: '/admin-panel/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/majors',
    element: <MajorsList />,
  },
  {
    path: '*',
    element: <div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>,
  },
];

export default createBrowserRouter(routes);
