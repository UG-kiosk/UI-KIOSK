import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import { Header, ContentContainer, Navbar } from '@UG/libs/components';
import { paths } from './paths';
import App from 'src/App';
import { LoginPage } from 'src/AdminPanel/modules/LoginPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <>
            <Header />
            <ContentContainer>
              <Outlet />
            </ContentContainer>
            <Navbar />
          </>
        }
      >
        <Route
          path={paths.majors}
          lazy={async () => {
            const major = await import('../modules/Majors');
            return { Component: major.MajorsPage };
          }}
        />
        <Route
          path={paths.majorsById}
          lazy={async () => {
            const major = await import('../modules/Majors');
            return { Component: major.MajorsPage };
          }}
        />
        <Route
          path={paths.news}
          lazy={async () => {
            const news = await import('../modules/News');
            return { Component: news.NewsPage };
          }}
        />
        <Route
          path={paths.newsById}
          lazy={async () => {
            const news = await import('../modules/News');
            return { Component: news.NewsPage };
          }}
        />
        <Route
          path={paths.staff}
          lazy={async () => {
            const staff = await import('../modules/Staff');
            return { Component: staff.StaffPage };
          }}
        />
        <Route
          path={paths.staffById}
          lazy={async () => {
            const ects = await import('../modules/Staff');
            return { Component: ects.StaffPage };
          }}
        />
        <Route
          path={paths.ectsDegree}
          lazy={async () => {
            const ects = await import('../modules/EctsSubject/Degree');
            return { Component: ects.Degree };
          }}
        />
        <Route
          path={paths.ectsMajor}
          lazy={async () => {
            const ects = await import('../modules/EctsSubject/Majors');
            return { Component: ects.Major };
          }}
        />
        <Route
          path={paths.ectsYear}
          lazy={async () => {
            const ects = await import('../modules/EctsSubject/Years');
            return { Component: ects.Years };
          }}
        />
        <Route
          path={paths.ectsSubjects}
          lazy={async () => {
            const ects = await import('../modules/EctsSubject/EctsSubjects');
            return { Component: ects.EctsSubjects };
          }}
        />
      </Route>
      <Route path={paths.root} element={<App />} />
      <Route path="*" element={<div data-cy="error-div">Error: wrong path: {window.location.pathname}</div>} />
      {/*TO DELETE AFTER ADDING ADMIN PANEL TO OTHER REPO */}
      <Route
        path="/admin-panel/login"
        element={
          <>
            <Header />
            <ContentContainer marginLeft={-6}>
              <LoginPage />
            </ContentContainer>
          </>
        }
      />
    </Route>,
  ),
);

export default router;
