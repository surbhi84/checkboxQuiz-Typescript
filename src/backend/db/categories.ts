import { CategoryRaw } from "backend/interfaces";

export const categories: CategoryRaw[] = [
  {
    id: "11",
    title: "HTML",
    description:
      "Take this quiz to test your HTML skills, each set contains 5 questions consisting of points according to the level you've chosen.",
    image: "assets/images/HTML.jpg",
    category_type: "FEATURED",
    tags: ["HTML"],
    timer_detail: [
      { level: "EASY", time: 15 },
      { level: "MED", time: 25 },
      { level: "HARD", time: 40 },
    ],
  },
  {
    id: "12",
    title: "CSS",
    description:
      "Take this quiz to test your CSS skills, each set contains 5 questions consisting of points according to the level you've chosen.",
    image: "assets/images/CSS.jpg",
    category_type: "FEATURED",
    tags: ["CSS"],
    timer_detail: [
      { level: "EASY", time: 15 },
      { level: "MED", time: 25 },
      { level: "HARD", time: 40 },
    ],
  },
  {
    id: "13",
    title: "JS",
    description:
      "Take this quiz to test your Javascript skills, each set contains 5 questions consisting of points according to the level you've chosen.",
    image: "assets/images/JS.jpg",
    category_type: "FEATURED",
    tags: ["JS  "],
    timer_detail: [
      { level: "EASY", time: 15 },
      { level: "MED", time: 25 },
      { level: "HARD", time: 40 },
    ],
  },
];
