class TaskDB {
  constructor(db = []) {
    this.db = [...db];

    this.getByBoardId = this.getByBoardId.bind(this);
    this.createTask = this.createTask.bind(this);
    this.getByBoardTaskIds = this.getByBoardTaskIds.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteTasksByBoardId = this.deleteTasksByBoardId.bind(this);
    this.updateTasksAfterUserDeleted = this.updateTasksAfterUserDeleted.bind(
      this
    );
  }

  getByBoardId(id) {
    if (this.db.length > 0) {
      return this.db.filter(el => el.boardId === id);
    }
    return this.db;
  }

  createTask(newTask) {
    this.db = [...this.db, newTask];
    return newTask;
  }

  getByBoardTaskIds(boardId, taskId) {
    return this.db.find(el => el.boardId === boardId && el.id === taskId);
  }

  updateTask(boardId, taskId, task) {
    let item = {};
    this.db = this.db.map(el => {
      if (el.id === taskId && el.boardId === boardId) {
        item = { ...el, ...task };
        return { ...el, ...task };
      }
      return el;
    });
    return item;
  }

  deleteTask(boardId, taskId) {
    const element = this.db.find(
      el => el.id === taskId && el.boardId === boardId
    );
    if (element) {
      this.db.splice(this.db.indexOf(element), 1);
      return true;
    }
    return false;
  }

  deleteTasksByBoardId(boardId) {
    if (this.db.length > 0) {
      this.db = this.db.filter(el => el.boardId !== boardId);
      return this.db;
    }
  }

  updateTasksAfterUserDeleted(userId) {
    if (this.db.length > 0) {
      this.db = this.db.map(el => {
        if (el.userId === userId) {
          return { ...el, userId: null };
        }
        return el;
      });
    }
    return this.db;
  }
}

const boardDB = new TaskDB([]);

module.exports = boardDB;
