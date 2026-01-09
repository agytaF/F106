const express = require('express');
const router = express.Router();
const controller = require('../controllers/forumControler');

router.get('/', controller.home);

router.get('/threads', controller.threads);
router.get('/thread/:id', controller.thread);

router.get('/users', controller.users);
router.get('/user/:id', controller.user);

router.get('/new-user', controller.newUserForm);
router.get('/create-user', controller.createUser);

router.get('/new-thread', controller.newThreadForm);
router.get('/create-thread', controller.createThread);

router.get('/create-post', controller.createPost);

module.exports = router;
