import Login from './AdminPanel/modules/Login';
import App from './App';

const routes = [
  {
    path: '/admin-panel/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/*',
    element: <div>Error: wrong path: {window.location.pathname}</div>,
  },
];

export default routes;
