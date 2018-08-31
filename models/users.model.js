const Model = require('./model.js')(`users`);
const knex = require('../db/knex');
const bcrypt = require('bcryptjs')


class UsersModel extends Model {
  constructor(){
    super()
  };

  static create(body) {
    body.hashed_password = bcrypt.hashSync(body.password)
    delete body.password
    return knex('users')
      .insert(body)
      .returning('*')
  };

  static getUserByUsername(user_name) {
    return knex('users')
      .where({ user_name })
      .first()
  };

};


module.exports= UsersModel
