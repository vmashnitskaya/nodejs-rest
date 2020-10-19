const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getByBoardId = id => tasksRepo.getByBoardId(id);

const createTask = async (id, newTask) => {
  if (newTask.boardId !== id) {
    return 'Bad request';
  }
  const task = new Task(newTask);
  return await tasksRepo.createTask(task);
};

const getByBoardTaskIds = async (boardId, taskId) => {
  return await tasksRepo.getByBoardTaskIds(boardId, taskId);
};

const updateTask = async (boardId, taskId, task) => {
  return await tasksRepo.updateTask(boardId, taskId, task);
};

const deleteTask = async (boardId, taskId) => {
  return await tasksRepo.deleteTask(boardId, taskId);
};

const deleteTasksByBoardId = async boardId => {
  return await tasksRepo.deleteTasksByBoardId(boardId);
};

const updateTasksAfterUserDeleted = async userId => {
  return await tasksRepo.updateTasksAfterUserDeleted(userId);
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
