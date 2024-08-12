import { authMiddleware } from "./authMiddleware";
import { localeMiddleWare } from "./localeMiddleware";
export const middlewares = [localeMiddleWare, authMiddleware];
