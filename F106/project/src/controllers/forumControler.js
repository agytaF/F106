const model = require('../models/forumModels');

async function home(req, res) {
  res.render('pages/index');
};

async function threads (req, res) {
  const category = req.query.category;
  const filter = category ? { category } : {};

  const threads = await model.getThreads(filter);
  res.render('pages/threads', { threads, category });
};

async function thread(req, res){
  const thread = await model.getThreadById(req.params.id);
  const posts = await model.getPostsByThreadId(req.params.id);
  res.render('pages/thread', { thread, posts });
};

async function users (req, res) {
  const users = await model.getUsers();
  res.render('pages/users', { users});
};

async function user(req, res) {
  const user = await model.getUserById(req.params.id);
  res.render('pages/user', { user });
};

async function newUserForm(req, res){
  res.render('pages/newUser');
};

async function createUser(req, res){
  const { id, name } = req.query;
  await model.createUser({ id: Number(id), name });
  res.redirect('/users');
};

async function newThreadForm(req, res){
  const users = await model.getUsers();
  res.render('pages/newThread', { users });
};

async function createThread(req, res){
  const { id, title, content, category, userId } = req.query;
  await model.createThread({
    id: Number(id),
    title,
    content,
    category,
    userId: Number(userId)
  });
  res.redirect('/threads');
};

async function createPost(req, res){
  const { id, content, userId, threadId } = req.query;
  await model.createPost({
    id: Number(id),
    content,
    userId: Number(userId),
    threadId: Number(threadId)
  });
  res.redirect(`/thread/${threadId}`);
};

module.exports = {home, threads, thread, users, user, newUserForm, createUser , newThreadForm, createThread, createPost}