const uuid = require('uuid');
const Column = require('./column.model');

class Board {
  constructor({ id = uuid(), title = 'BOARD', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.length > 0 ? columns.map(el => new Column(el)) : [];
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    const columnsResponse = columns.map(el => Column.toResponse(el));
    return { id, title, columns: columnsResponse };
  }
}

module.exports = Board;
