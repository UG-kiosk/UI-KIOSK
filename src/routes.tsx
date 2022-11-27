import { LoginPage } from './AdminPanel/modules/LoginPage';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/admin-panel/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <div>Error: wrong path: {window.location.pathname}</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
