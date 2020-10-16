const boardDB = require('./board.db');

const getAll = async () => {
  return boardDB.getAll();
};

const createBoard = async user => {
  return boardDB.createBoard(user);
};

const getById = async id => {
  return boardDB.getById(id);
};

const updateBoard = async (id, user) => {
  return boardDB.updateBoard(id, user);
};

const deleteBoard = async id => {
  return boardDB.deleteBoard(id);
};

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
