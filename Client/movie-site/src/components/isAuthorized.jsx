import { Navigate } from 'react-router';
import { jwtDecode } from 'jwt-decode';

const IsAuthorized = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/login" />;
    return children;
};

export default IsAuthorized;
