import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MajorDetailsPage, MajorsList } from './modules/Majors';
import { StaffListPage, StaffDetailsPage } from './modules/Staff';
import { Header, Navbar, ContentContainer } from '@UG/libs/components';

const routes: RouteObject[] = [
  {
    path: '/admin-panel/login',
    element: (
      <ContentContainer marginLeft={-6}>
        <Header />
        <LoginPage />
      </ContentContainer>
    ),
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/majors',
    element: (
      <ContentContainer>
        <Header />
        <MajorsList />
        <Navbar />
      </ContentContainer>
    ),
  },
  {
    path: '/majors/:name',
    element: (
      <ContentContainer>
        <Header />
        <MajorDetailsPage />
        <Navbar />
      </ContentContainer>
    ),
  },
  {
    path: '/staff',
    element: (
      <ContentContainer>
        <Header />
        <StaffListPage />
        <Navbar />
      </ContentContainer>
    ),
  },
  {
    path: '/staff/:_id',
    element: (
      <ContentContainer>
        <Header />
        <StaffDetailsPage />
        <Navbar />
      </ContentContainer>
    ),
  },
  {
    path: '*',
    element: <div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>,
  },
];

export default createBrowserRouter(routes);
