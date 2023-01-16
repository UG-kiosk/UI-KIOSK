import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { StaffListPage, StaffDetailsPage } from './modules/Staff';

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
    path: '/staff',
    element: <StaffListPage />,
  },
  {
    path: '/staff/:name',
    element: <StaffDetailsPage />,
  },
  {
    path: '*',
    element: <div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>,
  },
];

export default createBrowserRouter(routes);
