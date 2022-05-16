import { Registry, Request, Response, Server } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";
import Schema from "miragejs/orm/schema";

export const getCategoriesHandler = function (
  this: Server<Registry<AnyModels, AnyFactories>>,
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
) {
  try {
    return new Response(
      200,
      {},
      this.db.categories.filter(
        (category) => category.category_type === "FEATURED"
      )
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
