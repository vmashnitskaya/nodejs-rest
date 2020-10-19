const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'TASK',
    order = 0,
    userId = '',
    boardId = '',
    columnId = '',
    description = 'Task description'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
    this.description = description;
  }

  static toResponse(task) {
    const { id, title, order, userId, description } = task;
    return { id, title, order, userId, description };
  }
}

module.exports = Task;
