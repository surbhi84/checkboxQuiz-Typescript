import { UserRaw } from "backend/interfaces";

import { getCurrentDateTime } from "../utils";

export const users: UserRaw[] = [
  //  1
  {
    id: "666",
    fname: "Surbhi",
    lname: "Kukreti",
    username: "Surbhikukreti99",
    password: "acheDin",
    dob: "1997-03-07",
    contact: 8057700000,
    email: "randoms@gmail.com",
    createdAt: getCurrentDateTime(),
    updatedAt: getCurrentDateTime(),
    score: 70,
    quizPlayed: 10,
    recentlyPlayed: [
      {
        category: {
          id: "13",
          title: "JS",
          description:
            "Take this quiz to test your JS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/JS.jpg",
          category_type: "FEATURED",
          tags: ["JS  "],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "EASY",
      },
      {
        category: {
          id: "12",
          title: "CSS",
          description:
            "Take this quiz to test your CSS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/CSS.jpg",
          category_type: "FEATURED",
          tags: ["CSS"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "MED",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "HARD",
      },
    ],
    correctAnswered: 35,
    incorrectAnswered: 30,
    role: "ADMIN",
  },
  // 2
  {
    id: "667",
    fname: "Rajeev",
    lname: "Verma",
    username: "VermaRajeev",
    password: "acheDinn",
    dob: "1998-04-09",
    contact: 8057700001,
    email: "rajv@gmail.com",
    createdAt: getCurrentDateTime(),
    updatedAt: getCurrentDateTime(),
    score: 85,
    quizPlayed: 10,
    recentlyPlayed: [
      {
        category: {
          id: "12",
          title: "CSS",
          description:
            "Take this quiz to test your CSS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/CSS.jpg",
          category_type: "FEATURED",
          tags: ["CSS"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "EASY",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "MED",
      },
      {
        category: {
          id: "13",
          title: "JS",
          description:
            "Take this quiz to test your JS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/JS.jpg",
          category_type: "FEATURED",
          tags: ["JS  "],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "HARD",
      },
    ],
    correctAnswered: 60,
    incorrectAnswered: 40,
    role: "ADMIN",
  },
  // 3
  {
    id: "611",
    fname: "Lakshmi",
    lname: "",
    username: "lakshmi67",
    password: "keyLobster",
    dob: "1999-04-08",
    contact: 8057700000,
    email: "rlax@gmail.com",
    createdAt: getCurrentDateTime(),
    updatedAt: getCurrentDateTime(),
    score: 90,
    quizPlayed: 10,
    recentlyPlayed: [
      {
        category: {
          id: "12",
          title: "CSS",
          description:
            "Take this quiz to test your CSS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/CSS.jpg",
          category_type: "FEATURED",
          tags: ["CSS"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "EASY",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "MED",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "HARD",
      },
    ],
    correctAnswered: 50,
    incorrectAnswered: 0,
    role: "PLAYER",
  },
  // 4
  {
    id: "6155",
    fname: "Snehal",
    lname: "Sharma",
    username: "snehalSharma",
    password: "toppwd",
    dob: "1997-03-07",
    contact: 8057700022,
    email: "ss@gmail.com",
    createdAt: getCurrentDateTime(),
    updatedAt: getCurrentDateTime(),
    score: 90,
    quizPlayed: 7,
    recentlyPlayed: [
      {
        category: {
          id: "13",
          title: "JS",
          description:
            "Take this quiz to test your JS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/JS.jpg",
          category_type: "FEATURED",
          tags: ["JS  "],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "EASY",
      },
      {
        category: {
          id: "13",
          title: "JS",
          description:
            "Take this quiz to test your JS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/JS.jpg",
          category_type: "FEATURED",
          tags: ["JS  "],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "MED",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "HARD",
      },
    ],
    correctAnswered: 25,
    incorrectAnswered: 10,
    role: "PLAYER",
  },
  // 5
  {
    id: "68855",
    fname: "Vikram",
    lname: "Kochhar",
    username: "vikram",
    password: "blazingD",
    dob: "1999-12-24",
    contact: 8057700000,
    email: "vks@gmail.com",
    createdAt: getCurrentDateTime(),
    updatedAt: getCurrentDateTime(),
    score: 95,
    quizPlayed: 13,
    recentlyPlayed: [
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "EASY",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "MED",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "HARD",
      },
    ],
    correctAnswered: 53,
    incorrectAnswered: 12,
    role: "PLAYER",
  },
  // 6
  {
    id: "78855",
    fname: "Dhruv",
    lname: "Pandey",
    username: "dhruvPandey",
    password: "acheDinhai",
    dob: "1993-07-17",
    contact: 8057700023,
    email: "drvs@gmail.com",
    createdAt: getCurrentDateTime(),
    updatedAt: getCurrentDateTime(),
    score: 110,
    quizPlayed: 14,
    recentlyPlayed: [
      {
        category: {
          id: "12",
          title: "CSS",
          description:
            "Take this quiz to test your CSS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/CSS.jpg",
          category_type: "FEATURED",
          tags: ["CSS"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "EASY",
      },
      {
        category: {
          id: "13",
          title: "JS",
          description:
            "Take this quiz to test your JS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/JS.jpg",
          category_type: "FEATURED",
          tags: ["JS  "],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "MED",
      },
      {
        category: {
          id: "12",
          title: "CSS",
          description:
            "Take this quiz to test your CSS skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/CSS.jpg",
          category_type: "FEATURED",
          tags: ["CSS"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 70 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "HARD",
      },
    ],
    correctAnswered: 42,
    incorrectAnswered: 58,
    role: "PLAYER",
  },
  // 7
  {
    id: "788535",
    fname: "Deepak",
    lname: "Aggarwal",
    username: "@DeepAggarwal",
    password: "acheDincomingsoon",
    dob: "1994-09-15",
    contact: 8057700034,
    email: "deep@gmail.com",
    createdAt: getCurrentDateTime(),
    updatedAt: getCurrentDateTime(),
    score: 110,
    quizPlayed: 4,
    recentlyPlayed: [
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "EASY",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "MED",
      },
      {
        category: {
          id: "11",
          title: "HTML",
          description:
            "Take this quiz to test your HTML skills, each set contains 5 questions having points according to the level you've chosen.",
          image: "assets/images/HTML.jpg",
          category_type: "FEATURED",
          tags: ["HTML"],
          timer_detail: [
            { level: "EASY", time: 30 },
            { level: "MED", time: 60 },
            { level: "HARD", time: 90 },
          ],
        },
        level: "HARD",
      },
    ],
    correctAnswered: 17,
    incorrectAnswered: 3,
    role: "PLAYER",
  },
];
