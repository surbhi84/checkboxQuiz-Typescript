import { UserModel, UserRaw } from "backend/interfaces";
import sign from "jwt-encode";
import { Registry, Request, Response, Server } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { v4 as uuid } from "uuid";

import { getCurrentDateTime, requiresAuth, userResponse } from "../utils";

export const signupHandler = function (
  this: Server<Registry<AnyModels, AnyFactories>>,
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
): Response {
  const { username, fname, lname, dob, contact, email, password } = JSON.parse(
    request.requestBody
  );
  try {
    const user = this.db.users.findBy({ username });
    if (user) {
      return new Response(
        422,
        {},
        {
          message: "username Already Exists.",
        }
      );
    }
    const id = uuid();
    const newUser: UserRaw = {
      id,
      username,
      password,
      fname,
      lname,
      dob,
      contact,
      email,
      createdAt: getCurrentDateTime(),
      updatedAt: getCurrentDateTime(),
      score: 0,
      quizPlayed: 0,
      recentlyPlayed: [],
      correctAnswered: 0,
      incorrectAnswered: 0,
      role: "PLAYER",
    };

    const createdUser = this.create("user", newUser);
    const encodedToken = sign(
      { username: newUser.username },
      process.env.REACT_APP_JWT_SECRET as string
    );
    return new Response(
      201,
      {},
      {
        user: userResponse(createdUser.attrs as UserModel),
        encodedToken,
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: (error as Error).message,
      }
    );
  }
};

export const loginHandler = function (
  this: Server<Registry<AnyModels, AnyFactories>>,
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
): Response {
  const { username, password } = JSON.parse(request.requestBody);
  try {
    const user = this.db.users.findBy({ username });

    if (!user) {
      return new Response(
        404,
        {},
        {
          message:
            "The username you entered is not Registered. Not Found error",
        }
      );
    }
    if (password === user.password) {
      const encodedToken = sign(
        { username: user.username },
        process.env.REACT_APP_JWT_SECRET as string
      );

      return new Response(
        201,
        {},
        {
          encodedToken,
          user: userResponse(user),
        }
      );
    }
    return new Response(
      401,
      {},
      {
        message:
          "The credentials you entered are invalid. Unauthorized access error.",
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: "something went wrong",
      }
    );
  }
};

export const getUserHandler = function (
  this: Server<Registry<AnyModels, AnyFactories>>,
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        403,
        {},
        {
          message: "Auth Error",
        }
      );
    }

    return new Response(200, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: "something went wrong",
      }
    );
  }
};

export const patchUserHandler = function (
  this: Server<Registry<AnyModels, AnyFactories>>,
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        403,
        {},
        {
          message: "Auth Error",
        }
      );
    }
    const {
      score,
      quizPlayed,
      recentlyPlayed,
      correctAnswered,
      incorrectAnswered,
    } = JSON.parse(request.requestBody);
    const reqBody = {
      score,
      quizPlayed,
      recentlyPlayed,
      correctAnswered,
      incorrectAnswered,
    };
    const updateObject = {};
    for (let [key, value] of Object.entries(reqBody)) {
      if (!isNaN(Number(value)))
        Object.assign(updateObject, { [key]: Number(value) });

      const oldRecentlyPlayed = [
        ...this.db.users.findBy({ username: user.username }).recentlyPlayed,
      ];

      if (key === "recentlyPlayed") {
        if (oldRecentlyPlayed.length === 3) {
          recentlyPlayed.unshift(oldRecentlyPlayed[1], oldRecentlyPlayed[2]);
        } else {
          recentlyPlayed.unshift(...oldRecentlyPlayed);
        }
        Object.assign(updateObject, { [key]: recentlyPlayed });
      }
    }

    const updatedUser = this.db.users.update(
      { username: user.username },
      updateObject
    );

    if (score !== undefined && score !== null && !isNaN(Number(score))) {
      const highscores = [...this.db.highscores];
      let presentUser = highscores.find((i) => i.username === user.username);

      if (score > highscores.find((user) => user.rank === 7).score) {
        if (presentUser !== undefined) {
          this.db.highscores.remove({ rank: presentUser.rank });

          if (presentUser.rank === 7 && highscores[6].score > score)
            this.create("highscore", {
              id: uuid(),
              rank: 7,
              username: user.username,
              score: score,
              userId: user.id, //need to check this later from functional point of view
            });
          else
            for (let i = presentUser.rank - 1; i >= 0; i--) {
              if (
                i != 0 &&
                score > highscores.find((user) => user.rank === i).score
              )
                this.db.highscores.update({ rank: i }, { rank: i + 1 });
              else {
                this.create("highscore", {
                  id: uuid(),
                  rank: i + 1,
                  username: user.username,
                  score: score,
                  userId: user.id, //need to check this later from functional point of view
                });
                break;
              }
            }
        } else {
          this.db.highscores.remove({ rank: 7 });
          for (let i = 6; i >= 0; i--) {
            if (
              i != 0 &&
              score > highscores.find((user) => user.rank === i).score
            )
              this.db.highscores.update({ rank: i }, { rank: i + 1 });
            else {
              this.create("highscore", {
                id: uuid(),
                rank: i + 1,
                username: user.username,
                score: score,
                userId: user.id, //need to check this later from functional point of view
              });
              break;
            }
          }
        }
      }
    }

    return new Response(200, {}, { user: updatedUser });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: (error as Error).message,
      }
    );
  }
};
