import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'
import { wrapAsync } from '../../shared/utils/wrapAsync'

const authController = new AuthController()
const authRouter = Router()

authRouter.post('/', wrapAsync(authController.authenticate))

export { authRouter }
