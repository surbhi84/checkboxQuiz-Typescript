import { QuestionRaw } from 'backend/interfaces';

export const questions: QuestionRaw[] = [
  //html css js
  {
    id: "123",
    statement: "html is a ",
    "0": "markup language.",
    "1": "famous book.",
    "2": "turing complete language.",
    "3": "none of the above",
    correct_option: "0",
    tag: ["HTML"],
    level: "EASY",
  },
  {
    id: "122",
    statement: "functions are ",
    "0": "first class citizens in javascript",
    "1": "not objects",
    "2": "similar to arrays",
    "3": "all of the above",
    correct_option: "0",
    tag: ["JS"],
    level: "EASY",
  },
  {
    id: "121",
    statement: "css is",
    "0": "just used for filling colors",
    "1": "a markup language",
    "2": "an alternative to javascript",
    "3": "none of the above",
    correct_option: "3",
    tag: ["CSS"],
    level: "EASY",
  },
];
