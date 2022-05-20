import "./categoryCard.css";
import { Link } from "react-router-dom";
export const CategoryCard = ({
  category,
  description,
  image,
}: {
  category: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="category-card flex-col flex-center gap-sm">
      <h2 className="marg-un sec-ff">{category}</h2>
      <p className="mg-xs text-just">{description}</p>
      <img
        src={image}
        alt={`${category} category image`}
        className="responsive-img"
      />
      {/* <!-- redirecting links designed as buttons in category card --> */}
      <div className="flex-row gap-sm pd-xs">
        <Link
          className="outline-btn play-btn-style text-dec-none"
          to="/rules"
          state={{ category: category, level: "EASY" }}
        >
          Easy
        </Link>
        <Link
          className="outline-btn play-btn-style text-dec-none"
          to="/rules"
          state={{ category: category, level: "MED" }}
        >
          Medium
        </Link>
        <Link
          className="outline-btn play-btn-style text-dec-none"
          to="/rules"
          state={{ category: category, level: "HARD" }}
        >
          Hard
        </Link>
      </div>
      {/* <!-- end of redirecting links --> */}
    </div>
  );
};
