import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { wrapAsync } from '../../shared/utils/wrapAsync';

const userController = new UserController()
const userRouter = Router()

userRouter.post('/', wrapAsync(userController.create))
userRouter.get('/:id', wrapAsync(userController.getById));

export { userRouter }
