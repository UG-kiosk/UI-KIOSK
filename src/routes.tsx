import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './modules/HomePage';
import Login from './AdminPanel/modules/Login';

const AppRoutes: React.FunctionComponent = () => (
  <Router>
    <Routes>
      <Route path="/admin-panel/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<p>Error: wrong path</p>} />
    </Routes>
  </Router>
);

export default AppRoutes;
