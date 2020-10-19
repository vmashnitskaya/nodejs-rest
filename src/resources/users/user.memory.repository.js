const userDB = require('./user.db');

const getAll = async () => {
  return userDB.getAll();
};

const createUser = async user => {
  return userDB.createUser(user);
};

const getById = async id => {
  return userDB.getById(id);
};

const updateUser = async (id, user) => {
  return userDB.updateUser(id, user);
};

const deleteUser = async id => {
  return userDB.deleteUser(id);
};

module.exports = { getAll, createUser, getById, updateUser, deleteUser };
