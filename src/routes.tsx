import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MajorDetailsPage, MajorsList } from './modules/Majors';
import { Header, Navbar, ContentContainer } from '@UG/libs/components';
import { StaffPage } from './modules/Staff';

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
          <StaffPage />
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
          <StaffPage />
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
