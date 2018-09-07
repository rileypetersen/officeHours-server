const Model = require('./model.js')(`meetings`);
const knex = require('../db/knex');


class MeetingsModel extends Model {
  constructor(){
    super()
  };

  static index(organization_id, session_id) {
    return knex('meetings')
      .where({ organization_id, session_id })
      .then(res => {
        console.log(res, 'hello');
        return res
      })
  };

};


module.exports = MeetingsModel
