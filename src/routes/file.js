import { Router } from 'express';

import fileController from '../controllers/FileController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fileController.store);

export default router;
