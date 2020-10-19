const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router
  .route('/')
  .get(async (req, res) => {
    let result = await boardService.getAll();
    if (result.length) {
      result = result.map(Board.toResponse);
    }
    res.status(200).json(result);
  })
  .post(async (req, res) => {
    const { id, title, columns } = req.body;
    const result = await boardService.createBoard(id, title, columns);
    res.status(200).json(Board.toResponse(result));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await boardService.getById(id);
    if (result) {
      res.status(200).json(Board.toResponse(result));
    } else {
      res.status(404).json({ message: 'Board not found' });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { title, columns } = req.body;
    const result = await boardService.updateBoard(id, {
      title,
      columns
    });
    res.status(200).json(Board.toResponse(result));
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const result = await boardService.deleteBoard(id);
    if (result) {
      res.status(204).json({ message: 'The board has been deleted' });
    } else {
      res.status(404).json({ message: 'Board not found' });
    }
  });

module.exports = router;
