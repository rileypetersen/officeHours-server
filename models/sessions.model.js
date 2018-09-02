const Model = require('./model.js')(`sessions`);
const knex = require('../db/knex');


class UsersModel extends Model {
  constructor(){
    super()
  };

};


module.exports= UsersModel
