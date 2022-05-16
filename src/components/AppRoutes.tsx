import { Routes, Route } from "react-router-dom";
import Twopirest from "twopi-rest";
import {
  Category,
  Home,
  Results,
  Quiz,
  UrlNotFound,
  Profile,
  Login,
  Signup,
  Highscore,
} from "pages";
import { Rules, LoggedInRoutes, LoggedOutRoutes } from "components";
import { sample_requests } from "backend/sample-requests";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/" element={<LoggedInRoutes />}>
          <Route path="/rules" element={<Rules />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/highscores" element={<Highscore />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<LoggedOutRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/test" element={<Twopirest preset={sample_requests} />} />

        <Route path="*" element={<UrlNotFound />} />
      </Routes>
    </div>
  );
};
