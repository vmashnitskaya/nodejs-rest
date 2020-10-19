const taskDB = require('./task.db');

const getByBoardId = async id => {
  return taskDB.getByBoardId(id);
};

const createTask = async newTask => {
  return taskDB.createTask(newTask);
};

const getByBoardTaskIds = async (boardId, taskId) => {
  return taskDB.getByBoardTaskIds(boardId, taskId);
};

const updateTask = async (boardId, taskId, task) => {
  return taskDB.updateTask(boardId, taskId, task);
};

const deleteTask = async (boardId, taskId) => {
  return taskDB.deleteTask(boardId, taskId);
};

const deleteTasksByBoardId = async boardId => {
  return taskDB.deleteTasksByBoardId(boardId);
};

const updateTasksAfterUserDeleted = async userId => {
  return taskDB.updateTasksAfterUserDeleted(userId);
};

module.exports = {
  getByBoardId,
  createTask,
  getByBoardTaskIds,
  updateTask,
  deleteTask,
  deleteTasksByBoardId,
  updateTasksAfterUserDeleted
};
