import { CategoryModel, Level } from "backend/interfaces";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "userRedux/store";

export const LoggedInRoutes = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);
  const location = useLocation();
  const { category, level } =
    (location.state as {
      category: CategoryModel;
      level: Level;
    }) ??
    ({} as {
      category: CategoryModel;
      level: Level;
    });

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ from: location, state: { category, level } }}
      replace
    />
  );
};
