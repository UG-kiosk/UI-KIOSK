import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MajorDetailsPage, MajorsList } from './modules/Majors';
import { StaffListPage, StaffDetailsPage } from './modules/Staff';
import { Header } from '@UG/libs/components';

const routes: RouteObject[] = [
  {
    path: '/admin-panel/login',
    element: (
      <>
        <Header />
        <LoginPage />
      </>
    ),
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/majors',
    element: (
      <>
        {' '}
        <Header />
        <MajorsList />
      </>
    ),
  },
  {
    path: '/majors/:name',
    element: (
      <>
        <Header />
        <MajorDetailsPage />
      </>
    ),
  },
  {
    path: '/staff',
    element: (
      <>
        <Header /> <StaffListPage />
      </>
    ),
  },
  {
    path: '/staff/:_id',
    element: (
      <>
        <Header />
        <StaffDetailsPage />
      </>
    ),
  },
  {
    path: '*',
    element: <div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>,
  },
];

export default createBrowserRouter(routes);
