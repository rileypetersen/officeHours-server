const Model = require('./model.js')(`sessions`);
const knex = require('../db/knex');


class SessionsModel extends Model {
  constructor(){
    super()
  };

  static index(organization_id) {
    return knex('sessions')
      .where({ organization_id })
      .then(res => {
        console.log(res, 'hello');
        return res
      })
  };

  static show(organization_id, id) {
    return knex('sessions')
      .where({ organization_id, id })
      .first()
      .then(res => {
        if (!res) throw new Error(`sessionsNotFound`)
        return res
      })
  }

};


module.exports = SessionsModel
