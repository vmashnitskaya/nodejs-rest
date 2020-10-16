const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();

const createBoard = async (id, title, columns) => {
  const user = new Board({ id, title, columns });
  return await boardsRepo.createBoard(user);
};

const getById = async id => {
  return await boardsRepo.getById(id);
};

const updateBoard = async (id, board) => {
  return await boardsRepo.updateBoard(id, board);
};

const deleteBoard = async id => {
  return await boardsRepo.deleteBoard(id);
};

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
