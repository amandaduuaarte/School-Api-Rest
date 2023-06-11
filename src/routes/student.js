import { Router } from 'express';
import studentController from '../controllers/StudentController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', studentController.index);
router.post('/', loginRequired, studentController.store);
router.delete('/:id', loginRequired, studentController.delete);
router.put('/:id', loginRequired, studentController.update);
router.get('/:id', studentController.show);

export default router;
