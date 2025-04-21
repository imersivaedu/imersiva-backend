import { Router } from 'express'
import { ClassController } from '../controllers/ClassController'
import { wrapAsync } from '../../shared/utils/wrapAsync'

const classRouter = Router()
const classController = new ClassController()

classRouter.get('/:classId', wrapAsync(classController.getById))

export { classRouter }
