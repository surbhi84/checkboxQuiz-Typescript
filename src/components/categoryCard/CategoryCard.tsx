import "./categoryCard.css";
import { Link } from "react-router-dom";
export const CategoryCard = () => {
  return (
    <div className="category-card flex-col flex-center gap-sm">
      <h2 className="marg-un sec-ff">HTML</h2>
      <p className="mg-xs text-just">
        Take this quiz to text your html skills, each set contains 5 questions
        according to the level you've chosen and each question is worth 10
        points.
      </p>
      <img
        src="/assets/images/html.jpg"
        alt="html tag image"
        className="responsive-img"
      />
      {/* <!-- redirecting links designed as buttons in category card --> */}
      <div className="flex-row gap-sm pd-xs">
        <Link
          className="outline-btn play-btn text-dec-none"
          to="/pages/quizRules/"
        >
          Easy
        </Link>
        <Link
          className="outline-btn play-btn text-dec-none"
          to="/pages/quizRules/"
        >
          Medium
        </Link>
        <Link
          className="outline-btn play-btn text-dec-none"
          to="/pages/quizRules/"
        >
          Hard
        </Link>
      </div>
      {/* <!-- end of redirecting links --> */}
    </div>
  );
};
