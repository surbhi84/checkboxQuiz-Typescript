import { CategoryModel, Level } from "backend/interfaces";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "userRedux/store";

export const LoggedOutRoutes = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);
  const location = useLocation();

  const { category, level } =
    (
      location.state as {
        state: {
          category: CategoryModel;
          level: Level;
        };
      }
    )?.state ??
    (
      {} as {
        state: {
          category: CategoryModel;
          level: Level;
        };
      }
    ).state;

  const from =
    (location.state as { from: { pathname: string } })?.from?.pathname ??
    "/categories";

  return !isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={from} state={{ category, level }} replace={true} />
  );
};
