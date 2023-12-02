import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { MajorsPage } from './modules/Majors';
import { Header, Navbar, ContentContainer } from '@UG/libs/components';
import { StaffPage } from './modules/Staff';
import { NewsPage } from './modules/News';

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
          <MajorsPage />
        </ContentContainer>
        <Navbar />
      </>
    ),
  },
  {
    path: '/majors/:_id',
    element: (
      <>
        <Header />
        <ContentContainer>
          <MajorsPage />
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
    path: '/news',
    element: (
      <>
        <Header />
        <ContentContainer>
          <NewsPage />
        </ContentContainer>
        <Navbar />
      </>
    ),
  },
  {
    path: '/news/:_id',
    element: (
      <>
        <Header />
        <ContentContainer>
          <NewsPage />
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
