import { NextFunction, Request, Response } from 'express'
import { ForbiddenOperationError } from '../../app/errors/ForbiddenOperationError'
import { NotFoundError } from '../../app/errors/NotFoundError'
import { InvalidArgumentError } from '../../domain/errors/InvalidArgumentError'
import { RequiredFieldsIsNotProvided } from '../../shared/errors/RequiredFieldsIsNotProvided'
import { UnauthorizedError } from '../../shared/errors/UnauthorizedError'
import { CredentialsError } from '../../app/errors/CredentialsError'
import { AlreadyExistsError } from '../../shared/errors/AlreadyExistsError'
import { InvalidParamError } from '../../shared/errors/InvalidParamError'

export function asyncErrors (err: Error, req: Request, res: Response, next: NextFunction): Response {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ error: err.message })
  }

  if (err instanceof InvalidArgumentError) {
    return res.status(400).json({ error: err.message })
  }

  if (err instanceof InvalidParamError) {
    return res.status(400).json({ error: err.message })
  }

  if (err instanceof AlreadyExistsError) {
    return res.status(400).json({ error: err.message })
  }

  if (err instanceof ForbiddenOperationError) {
    return res.status(403).json({ error: err.message })
  }

  if (err instanceof RequiredFieldsIsNotProvided) {
    return res.status(403).json({ error: err.message })
  }

  if (err instanceof UnauthorizedError) {
    return res.status(403).json({ error: err.message })
  }

  if (err instanceof CredentialsError) {
    return res.status(403).json({ error: err.message })
  }

  console.log(err)
  return res.status(500).json({ error: 'internal server error' })
}
