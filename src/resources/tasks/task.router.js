const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');

router
  .route('/:boardId/tasks')
  .get(async (req, res) => {
    const { boardId } = req.params;
    const result = await taskService.getByBoardId(boardId);
    res
      .status(200)
      .json(result.length > 0 ? result.map(el => Task.toResponse(el)) : []);
  })
  .post(async (req, res) => {
    const { boardId: id } = req.params;
    const { title, order, description, userId, boardId, columnId } = req.body;

    const result = await taskService.createTask(id, {
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    });
    res.status(200).json(Task.toResponse(result));
  });

router
  .route('/:boardId/tasks/:taskId')
  .get(async (req, res) => {
    const { boardId, taskId } = req.params;
    const result = await taskService.getByBoardTaskIds(boardId, taskId);
    if (result) {
      res.status(200).json(Task.toResponse(result));
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  })
  .put(async (req, res) => {
    const { boardId: id, taskId } = req.params;
    const { title, order, description, userId, boardId, columnId } = req.body;
    const result = await taskService.updateTask(id, taskId, {
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    });
    res.status(200).json(Task.toResponse(result));
  })
  .delete(async (req, res) => {
    const { boardId, taskId } = req.params;
    const result = await taskService.deleteTask(boardId, taskId);
    if (result) {
      res.status(200).json({ message: 'The task has been deleted' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  });

module.exports = router;
