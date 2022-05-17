import {
  UserModel,
  UserResponse,
} from 'backend/interfaces';
import jwt_decode, { JwtDecodeOptions } from 'jwt-decode';
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

export const requiresAuth = function (
  this: Server<Registry<AnyModels, AnyFactories>>,
  request: Request
) {
  const encodedToken = request.requestHeaders.authorization;
  if (encodedToken === null)
    return new Response(401, {}, { message: "Auth Error" });
  const decodedToken: { username: string } = jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET as JwtDecodeOptions
  );
  if (decodedToken === null)
    return new Response(401, {}, { message: "Auth Error" });

  const user = this.db.users.findBy({ username: decodedToken.username });
  return user;
};

export const getCurrentDateTime = (): string => new Date().toISOString();

export const shuffleArray = (a: Array<any>) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
export const userResponse = (user: UserModel): UserResponse => {
  const { password, updatedAt, ...userResp } = user;
  console.log(userResp, "userResponse");
  return userResp;
};
