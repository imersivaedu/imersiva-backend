import { Request, Response, NextFunction, RequestHandler } from 'express';

export const wrapAsync = (fn: (...args: any[]) => Promise<any>): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
};