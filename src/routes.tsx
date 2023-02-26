import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MajorDetailsPage, MajorsList } from './modules/Majors';
import { StaffListPage, StaffDetailsPage } from './modules/Staff';
import { Header, Navbar } from '@UG/libs/components';

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
        <Navbar />
      </>
    ),
  },
  {
    path: '/majors/:name',
    element: (
      <>
        <Header />
        <MajorDetailsPage />
        <Navbar />
      </>
    ),
  },
  {
    path: '/staff',
    element: (
      <>
        <Header />
        <StaffListPage />
        <Navbar />
      </>
    ),
  },
  {
    path: '/staff/:_id',
    element: (
      <>
        <Header />
        <StaffDetailsPage />
        <Navbar />
      </>
    ),
  },
  {
    path: '*',
    element: <div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>,
  },
];

export default createBrowserRouter(routes);
