import { Router } from 'express';

import profileController from '../controllers/ProfileController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, profileController.store);

export default router;
