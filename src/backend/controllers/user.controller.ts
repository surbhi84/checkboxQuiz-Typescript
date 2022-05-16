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

    return new Response(200, {}, user);
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
  console.log("in for a call");

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
    }
    // if(score){
    // implement later
    // }

    const updatedUser = this.db.users.update(
      { username: user.username },
      updateObject
    );

    console.log(
      {
        score,
        quizPlayed,
        recentlyPlayed,
        correctAnswered,
        incorrectAnswered,
      },
      updatedUser,
      "updated user"
    );

    return new Response(200, {}, updatedUser);
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
