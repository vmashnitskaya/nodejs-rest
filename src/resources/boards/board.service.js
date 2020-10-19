const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');
const tasksService = require('../tasks/task.service');

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
  const result = await boardsRepo.deleteBoard(id);
  await tasksService.deleteTasksByBoardId(id);
  return result;
};

module.exports = { getAll, createBoard, getById, updateBoard, deleteBoard };
