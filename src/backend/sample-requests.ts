// This file provides sample uasge of all the api enpoints.
// you can play around with TwopiRest component by feeding this array to preset
// for eg:  <TwopiRest preset={sample_requests} />
export const sample_requests: Array<{
  name: string;
  req_type: "PATCH" | "GET" | "POST" | "PUT" | "DELETE";
  base_url: string;
  url: string;
  query_str: string;
  body: Object;
  header: Object;
}> = [
  {
    name: "user signup",
    req_type: "POST",
    base_url: "",
    url: "/user/signup",
    query_str: "",
    body: {
      fname: "Shiv",
      lname: "Raj",
      username: "sr11",
      dob: "11-12-2012",
      email: "Shiv@e.com",
      contact: "8057761545",
      password: "wah",
    },
    header: {},
  },
  {
    name: "user login",
    req_type: "POST",
    base_url: "",
    url: "/user/login",
    query_str: "",
    body: {
      username: "sr11",
      password: "wah",
    },
    header: {},
  },
  {
    name: "default user login",
    req_type: "POST",
    base_url: "",
    url: "/user/login",
    query_str: "",
    body: {
      username: "sjtgshivam",
      password: "acheDin",
    },
    header: {},
  },

  {
    name: "current user",
    req_type: "GET",
    base_url: "",
    url: "/user",
    query_str: "",
    body: {},
    header: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNqdGdzaGl2YW0ifQ.vzWhvz8B8qnFvMDCZ5euP7Dfh0cZLbCcoLsMdaraFQY",
    },
  },
  {
    name: "user",
    req_type: "PATCH",
    base_url: "",
    url: "/user",
    query_str: "",
    body: {
      score: 7,
      quizPlayed: 55,
      recentlyPlayed: 66,
      // correctAnswered:77,
      incorrectAnswered: 88,
    },
    header: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNqdGdzaGl2YW0ifQ.vzWhvz8B8qnFvMDCZ5euP7Dfh0cZLbCcoLsMdaraFQY",
    },
  },
  {
    name: "qs",
    req_type: "GET",
    base_url: "",
    url: "/question",
    query_str: "?tags=HTML,JS&lvl=EASY&length=5",
    body: {},
    header: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNqdGdzaGl2YW0ifQ.vzWhvz8B8qnFvMDCZ5euP7Dfh0cZLbCcoLsMdaraFQY",
    },
  },
  {
    name: "highscore",
    req_type: "GET",
    base_url: "",
    url: "/highscore",
    query_str: "",
    body: {},
    header: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNqdGdzaGl2YW0ifQ.vzWhvz8B8qnFvMDCZ5euP7Dfh0cZLbCcoLsMdaraFQY",
    },
  },
  {
    name: "category",
    req_type: "GET",
    base_url: "",
    url: "/category",
    query_str: "",
    body: {},
    header: {
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNqdGdzaGl2YW0ifQ.vzWhvz8B8qnFvMDCZ5euP7Dfh0cZLbCcoLsMdaraFQY",
    },
  },
  // {
  //   name: "empty",
  //   req_type: "PATCH",
  //   base_url: "",
  //   url: "",
  //   query_str: "",
  //   body: {},
  //   header: {},
  // },
];
