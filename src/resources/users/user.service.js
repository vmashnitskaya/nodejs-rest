const usersRepo = require('./user.memory.repository');
const User = require('./user.model');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const createUser = async (id, name, login, password) => {
  const user = new User({ id, name, login, password });
  return await usersRepo.createUser(user);
};

const getById = async id => {
  return await usersRepo.getById(id);
};

const updateUser = async (id, user) => {
  return await usersRepo.updateUser(id, user);
};

const deleteUser = async id => {
  const result = await usersRepo.deleteUser(id);
  await tasksService.updateTasksAfterUserDeleted(id);
  return result;
};

module.exports = { getAll, createUser, getById, updateUser, deleteUser };
