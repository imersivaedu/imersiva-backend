import { Router } from 'express'
import { CityController } from '../controllers/CityController'
import { wrapAsync } from '../../shared/utils/wrapAsync';

const cityRouter = Router()
const cityController = new CityController()

cityRouter.get('/byUserId', wrapAsync(cityController.getByUserId))

export { cityRouter }
