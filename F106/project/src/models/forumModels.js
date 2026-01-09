const connect = require('../data/connection');

async function getThreads(filter) {
  const db = await connect();
  return db.collection('threads').find(filter).toArray();
}

async function getThreadById(id) {
  const db = await connect();
  return db.collection('threads').findOne({ id: Number(id) });
}

async function getUsers() {
  const db = await connect();
  return db.collection('users').find({}).toArray();
}

async function getUserById(id) {
  const db = await connect();
  return db.collection('users').findOne({ id: Number(id) });
}

async function createUser(user) {
  const db = await connect();
  return db.collection('users').insertOne(user);
}

async function createThread(thread) {
  const db = await connect();
  return db.collection('threads').insertOne(thread);
}

async function getPostsByThreadId(threadId) {
  const db = await connect();
  return db.collection('posts')
    .find({ threadId: Number(threadId) })
    .toArray();
}

async function createPost(post) {
  const db = await connect();
  return db.collection('posts').insertOne(post);
}

module.exports = { getThreads, getThreadById, getUsers, getUserById, createUser, createThread, getPostsByThreadId, createPost};
