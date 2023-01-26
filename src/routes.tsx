import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MajorDetailsPage, MajorsList } from './modules/Majors';
import { EventsListPage, EventsDetailsPage } from './modules/Events';

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
    path: '/majors/:name',
    element: <MajorDetailsPage />,
  },
  {
    path: '/events',
    element: <EventsListPage />,
  },
  {
    path: '/events/:name',
    element: <EventsDetailsPage />,
  },
  {
    path: '*',
    element: <div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>,
  },
];

export default createBrowserRouter(routes);
