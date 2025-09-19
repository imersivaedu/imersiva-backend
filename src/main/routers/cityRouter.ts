import { Router } from 'express'
import { CityController } from '../controllers/CityController'
import { wrapAsync } from '../../shared/utils/wrapAsync';
import { authMiddleware } from '../middlewares/authMiddleware';

const cityRouter = Router()
const cityController = new CityController()

cityRouter.get('/byUserId', authMiddleware, wrapAsync(cityController.getByUserId))

export { cityRouter }
