import { getCategories } from "apiCalls";
import { CategoryModel } from "backend/interfaces";
import { CategoryCard } from "components";
import { useEffect, useState } from "react";
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
  const [categories, setCategories] = useState<Array<CategoryModel>>();

  useEffect(() => {
    (async function () {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="category-container flex-col gap-xl">
      {categories?.map((item) => (
        <CategoryCard
          key={item.id}
          category={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};
