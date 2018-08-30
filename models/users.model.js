const Model = require('./model.js')(`users`);
const knex = require('../db/knex');


class UsersModel extends Model {
  constructor(){
    super()
  }

  static getUserByEmail(email){
    return knex('users')
      .where({ email })
      .first()
  }; 

  static getUserByUsername(username) {
    return knex('users')
      .where({ username })
      .first()
  };

}


module.exports= UsersModel
