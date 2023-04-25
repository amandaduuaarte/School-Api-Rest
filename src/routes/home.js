import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send('hello world');
});

export default router;
