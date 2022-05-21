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

export const getHighscoresHandler = function (
  this: Server<Registry<AnyModels, AnyFactories>>,
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
) {
  try {
    return new Response(200, {}, this.db.highscores);
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
