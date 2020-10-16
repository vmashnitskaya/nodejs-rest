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
    return this.db.length > 0 ? this.db.filter(el => el.id === id)[0] : [];
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
    if (this.db.length > 0) {
      const filtered = this.db.filter(el => el.id !== id);
      if (filtered.length !== this.db.length) {
        this.db = filtered;
        return true;
      }
      return false;
    }
  }
}

const boardDB = new BoardDB([]);

module.exports = boardDB;
