const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    let result = await usersService.getAll();
    if (result.length) {
      result = result.map(User.toResponse);
    }
    res.status(200).json(result);
  })
  .post(async (req, res) => {
    const { id, name, login, password } = req.body;
    const result = await usersService.createUser(id, name, login, password);
    res.status(200).json(User.toResponse(result));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await usersService.getById(id);
    res.status(200).json(User.toResponse(result));
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { name, login, password } = req.body;
    const result = await usersService.updateUser(id, { name, login, password });
    console.log(result);
    res.status(200).json(User.toResponse(result));
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const result = await usersService.deleteUser(id);
    console.log(result);
    if (result) {
      res.status(204).json({ message: 'The user has been deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

module.exports = router;
