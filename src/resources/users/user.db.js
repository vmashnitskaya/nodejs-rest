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
    return this.db.length > 0 ? this.db.filter(el => el.id === id)[0] : [];
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

const userDB = new UserDB([]);

module.exports = userDB;
