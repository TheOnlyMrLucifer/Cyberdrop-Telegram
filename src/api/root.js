import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ status: 'The King Of Hell' });
});

export default router;
