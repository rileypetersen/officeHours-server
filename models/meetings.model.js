const Model = require('./model.js')(`meetings`);
const knex = require('../db/knex');


class MeetingsModel extends Model {
  constructor(){
    super()
  };

};


module.exports= MeetingsModel
