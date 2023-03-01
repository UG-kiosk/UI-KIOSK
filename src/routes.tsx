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
      <>
        <Header />
        <ContentContainer marginLeft={-6}>
          <LoginPage />
        </ContentContainer>
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
        <Header />
        <ContentContainer>
          <MajorsList />
        </ContentContainer>
        <Navbar />
      </>
    ),
  },
  {
    path: '/majors/:name',
    element: (
      <>
        <Header />
        <ContentContainer>
          <MajorDetailsPage />
        </ContentContainer>
        <Navbar />
      </>
    ),
  },
  {
    path: '/staff',
    element: (
      <>
        <Header />
        <ContentContainer>
          <StaffListPage />
        </ContentContainer>
        <Navbar />
      </>
    ),
  },
  {
    path: '/staff/:_id',
    element: (
      <>
        <Header />
        <ContentContainer>
          <StaffDetailsPage />
        </ContentContainer>
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
