import { Router } from 'express';
import { StudentController } from '../controllers/StudentController';
import { uploader } from '../middlewares/uploadFile';
import { wrapAsync } from '../../shared/utils/wrapAsync';
import { authMiddleware } from '../middlewares/authMiddleware';

const studentController = new StudentController();
const studentRouter = Router();

studentRouter.get('/:classId', wrapAsync(studentController.list));
studentRouter.get('/details/:id/:testId', wrapAsync(studentController.getById));
studentRouter.get('/details/:id', wrapAsync(studentController.getById));
studentRouter.post('/import', authMiddleware, uploader.single('file'), wrapAsync(studentController.create));
studentRouter.delete('/:id', wrapAsync(studentController.delete));

export { studentRouter };     