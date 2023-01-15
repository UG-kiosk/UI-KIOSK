import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { WorkersPage, WorkerPage } from './components/WorkersPage';

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
    path: '/workers',
    element: <WorkersPage />,
  },
  {
    path: '/workers/:id',
    element: <WorkerPage />,
  },
  {
    path: '*',
    element: <div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>,
  },
];

export default createBrowserRouter(routes);
