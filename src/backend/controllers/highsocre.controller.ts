import {
  Registry,
  Request,
  Response,
  Server,
} from 'miragejs';
import {
  AnyFactories,
  AnyModels,
} from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

import { requiresAuth } from '../utils';

export const getUserHandler = function (
  this: Server<Registry<AnyModels, AnyFactories>>,
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
) {
  const encodedToken = request.requestHeaders.authorization;
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
