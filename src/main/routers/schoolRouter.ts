import { Router } from 'express'
import { SchoolController } from '../controllers/SchoolController'
import { wrapAsync } from '../../shared/utils/wrapAsync'

const schoolController = new SchoolController()
const schoolRouter = Router()

schoolRouter.get('/:cityId', wrapAsync(schoolController.getByCityId))
schoolRouter.get('/withClasses/:id', wrapAsync(schoolController.getWithClassesBySchoolId))

export { schoolRouter }
