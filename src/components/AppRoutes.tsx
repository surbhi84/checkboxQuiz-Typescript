import { Routes, Route, Link } from "react-router-dom";
import Twopirest from "twopi-rest";
import { sample_requests } from "backend/sample-requests";
import { Rules, LoggedInRoutes, LoggedOutRoutes } from "components";
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

export const AppRoutes = () => {
  return (
    <div>
      <Link to="/test">Test</Link>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />

        {/* Private Routes */}
        <Route path="/" element={<LoggedInRoutes />}>
          <Route path="/rules" element={<Rules />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/highscores" element={<Highscore />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Login Signup */}
        <Route path="/" element={<LoggedOutRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Test Route */}
        <Route path="/test" element={<Twopirest preset={sample_requests} />} />

        {/* Not found  */}
        <Route path="*" element={<UrlNotFound />} />
      </Routes>
    </div>
  );
};
