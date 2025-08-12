import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '../../shared/errors/UnauthorizedError';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError('Token não fornecido');
  }

  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    throw new UnauthorizedError('Formato do token inválido');
  }

  try {
    const secretKey = process.env.SECRET_KEY as string;
    const decoded = verify(token, secretKey) as { sub: string };

    (req as any).userId = decoded.sub;
    return next();
  } catch (err) {
    throw new UnauthorizedError('Token inválido ou expirado');
  }
}
