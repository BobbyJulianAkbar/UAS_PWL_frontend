import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { Navigate, Outlet } from "react-router-dom";

const CheckAnggotaLayout = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();

  const checkAdmin = () => {
    if (isAuthenticated()) {
      if (auth()?.nama) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <>{checkAdmin() ? <Outlet /> : <Navigate to="/login-anggota" replace />}</>
  );
};

export default CheckAnggotaLayout;
