import { Router } from 'express';
import multer from 'multer';

import photoController from '../controllers/PhotoController';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('photo'), photoController.store);

export default router;
