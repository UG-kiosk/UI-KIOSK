import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { WorkersListPage, WorkerDetailsPage } from './modules/Workers';

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
    element: <WorkersListPage />,
  },
  {
    path: '/workers/:name',
    element: <WorkerDetailsPage />,
  },
  {
    path: '*',
    element: <div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>,
  },
];

export default createBrowserRouter(routes);
