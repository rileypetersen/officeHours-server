const Model = require('./model.js')(`sessions`);
const knex = require('../db/knex');


class SessionsModel extends Model {
  constructor(){
    super()
  };

};


module.exports = SessionsModel
