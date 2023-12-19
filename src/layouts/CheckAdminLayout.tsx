import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { Navigate, Outlet } from "react-router-dom";

const CheckAdminLayout = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();

  const checkAdmin = () => {
    if (isAuthenticated()) {
      if (auth()?.fnama) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return <>{checkAdmin() ? <Outlet /> : <Navigate to="/login" replace />}</>;
};

export default CheckAdminLayout;
