const Model = require('./model.js')(`users`);
const knex = require('../db/knex');


class UsersModel extends Model {
  constructor(){
    super()
  }

  static getUserByUsername(username) {
    return knex('users')
      .where({ username })
      .first()
  };

}


module.exports= UsersModel
