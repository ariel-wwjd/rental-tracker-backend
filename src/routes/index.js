const { Router } = require('express');
const homeRouter = require('./home');
const userRouter = require('./user');
const authRouter = require('./auth');

const router = Router();
router.use('/', homeRouter());
router.use('/users', userRouter());
router.use('/auth', authRouter());

module.exports = router;
