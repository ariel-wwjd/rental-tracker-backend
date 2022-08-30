const { Router } = require('express');
const userRouter = require('./user');
const authRouter = require('./auth');
const User = require('../models/user');

const router = Router();
router.use('/user', userRouter(User));
router.use('/auth', authRouter());

module.exports = router;
