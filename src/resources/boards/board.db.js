class BoardDB {
  constructor(db = []) {
    this.db = [...db];

    this.getAll = this.getAll.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.getById = this.getById.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
  }

  getAll() {
    return this.db;
  }

  createBoard(board) {
    if (
      this.db.length > 0 &&
      this.db.filter(el => el.id === board.id).length > 0
    ) {
      return {};
    }
    this.db.push(board);
    return board;
  }

  getById(id) {
    let element = null;
    if (this.db.length > 0) {
      element = this.db.find(el => el.id === id);
    }
    return element;
  }

  updateBoard(id, board) {
    let boardUpdated = {};
    this.db = this.db.map(el => {
      if (el.id === id) {
        boardUpdated = { ...el, ...board };
        return { ...el, ...board };
      }
      return el;
    });
    return boardUpdated;
  }

  deleteBoard(id) {
    const element = this.db.find(el => el.id === id);
    if (element) {
      this.db.splice(this.db.indexOf(element), 1);
      return true;
    }
    return false;
  }
}

const boardDB = new BoardDB([]);

module.exports = boardDB;
