class UserDB {
  constructor(db = []) {
    this.db = [...db];

    this.getAll = this.getAll.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getById = this.getById.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  getAll() {
    return this.db;
  }

  createUser(user) {
    if (
      this.db.length > 0 &&
      this.db.filter(el => el.id === user.id).length > 0
    ) {
      return {};
    }
    this.db.push(user);
    return user;
  }

  getById(id) {
    let element = null;
    if (this.db.length > 0) {
      element = this.db.find(el => el.id === id);
    }
    return element;
  }

  updateUser(id, user) {
    let userUpdated = {};
    this.db = this.db.map(el => {
      if (el.id === id) {
        userUpdated = { ...el, ...user };
        return { ...el, ...user };
      }
      return el;
    });
    return userUpdated;
  }

  deleteUser(id) {
    const element = this.db.find(el => el.id === id);
    if (element) {
      this.db.splice(this.db.indexOf(element), 1);
      return true;
    }
    return false;
  }
}

const userDB = new UserDB([]);

module.exports = userDB;
