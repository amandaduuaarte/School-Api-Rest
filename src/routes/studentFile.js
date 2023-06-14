import { Router } from 'express';

import studentFileController from '../controllers/StudentFileController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, studentFileController.store);

export default router;
