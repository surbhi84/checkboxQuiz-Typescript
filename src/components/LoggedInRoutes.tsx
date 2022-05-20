import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "userRedux/store";

export const LoggedInRoutes = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
