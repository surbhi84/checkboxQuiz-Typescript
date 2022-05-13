import { CategoryCard } from "components";
import "./category.css";
const categoryData = [
  {
    category: "HTML",
  },
  {
    category: "CSS",
  },
  {
    category: "JS",
  },
];

export const Category = () => {
  return (
    <div className="category-container flex-col gap-xl">
      {categoryData.map((item) => (
        <CategoryCard key={item.category} category={item.category} />
      ))}
    </div>
  );
};
