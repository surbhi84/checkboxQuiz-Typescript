import { CategoryRaw } from 'backend/interfaces';

export const categories: CategoryRaw[] = [
  {
    id: "11",
    title: "HTML",
    description: "this is category for html",
    image: "/gvh/ghvg",
    category_type: "FEATURED",
    tags: ["HTML"],
    timer_detail: [
      { level: "EASY", time: 30 },
      { level: "MID", time: 60 },
      { level: "HARD", time: 90 },
    ],
  },
  {
    id: "12",
    title: "HTML",
    description: "this is category for html",
    image: "/gvh/ghvg",
    category_type: "PERSONAL",
    tags: ["HTML"],
    timer_detail: [
      { level: "EASY", time: 30 },
      { level: "MID", time: 70 },
      { level: "HARD", time: 90 },
    ],
  },
  {
    id: "123",
    title: "Js",
    description: "this is category for html",
    image: "/gvh/ghvg",
    category_type: "FEATURED",
    tags: ["HTML"],
    timer_detail: [
      { level: "EASY", time: 30 },
      { level: "MID", time: 70 },
      { level: "HARD", time: 90 },
    ],
  },
];
