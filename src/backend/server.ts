import { belongsTo, hasMany, Model, RestSerializer, Server } from "miragejs";

import { getCategoriesHandler } from "./controllers/category.controller";
import {
  getHighscoresHandler,
  getQuestionsHandler,
} from "./controllers/question.controller";
import {
  getUserHandler,
  loginHandler,
  patchUserHandler,
  signupHandler,
} from "./controllers/user.controller";
import { categories } from "./db/categories";
import { highscores } from "./db/highscores";
import { questions } from "./db/questions";
import { users } from "./db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,

    models: {
      users: Model.extend({
        questions: hasMany("questions"),
        categories: hasMany("categories"),
      }),

      questions: Model.extend({
        creator: belongsTo("users"),
      }),

      highscores: Model.extend({
        user: belongsTo("users"),
      }),

      categories: Model.extend({
        creator: belongsTo("users"),
      }),
    },

    seeds(server) {
      server.logging = true;

      users.forEach((userItem, index) => {
        let user = server.create("user", { ...userItem });
        if (index === 0) {
          questions.forEach((item) => {
            server.create("question", { ...item, creator: user });
          });
          categories.forEach((item) => {
            server.create("category", { ...item, creator: user });
          });
        }

        server.create("highscore", {
          ...highscores[index],
          username: userItem.username,
          user,
        });
      });
    },

    routes() {
      this.namespace = "";
      // this.timing = 10000;
      this.post("/user/signup", signupHandler.bind(this));
      this.post("/user/login", loginHandler.bind(this));
      this.get("/user", getUserHandler.bind(this));
      this.get("/qs", getQuestionsHandler.bind(this));
      this.patch("/user", patchUserHandler.bind(this));
      this.get("/hs", getHighscoresHandler.bind(this));
      this.get("/category", getCategoriesHandler.bind(this));
    },
  });
}
