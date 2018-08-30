const Model = require('./model.js')(`users`);
const knex = require('../db/knex');


class UsersModel extends Model {
  constructor(){
    super()
  }

  static getUserByUsername(user_name) {
    return knex('users')
      .where({ user_name })
      .first()
  };

}


module.exports= UsersModel
